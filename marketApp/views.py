import datetime
from django.shortcuts import redirect, render
from django.contrib.auth import login , logout, authenticate
from django.contrib import messages
from .models import *
from django.utils import timezone

def save_activity(user, activity_title, activity_type, extra_data=None, date=None):
    """
    Saves an activity instance with the provided data.
    
    Parameters:
    - user: The user associated with the activity.
    - activity_title: The title of the activity.
    - activity_type: The type of the activity.
    - extra_data: Additional data related to the activity (optional).
    - date: The date of the activity (optional). If not provided, the current date and time will be used.
    
    Returns:
    - The saved Activity instance.
    """
    if date is None:
        date =  datetime.datetime.now()
        
    activity = Activity.objects.create(
        user=user,
        activity_title=activity_title,
        activity_type=activity_type,
        extra_data=extra_data,
        date=date
    )
    
    return activity


# Create your views here.
def dashboard(request): 
    if request.user.is_staff: 
        try:
            user_account = UserFinanceAccount.objects.get(user=request.user)
        except UserFinanceAccount.DoesNotExist:
            # If the user does not have a finance account, create one
            user_account = UserFinanceAccount.objects.create(user=request.user, balance=0)
        stockList= StockList.objects.all()
        data = {
          "stockList":stockList,
          "user_account":user_account,
        }
        return render(request, 'market_app/index.html',data)
    else: 
        return redirect('/login')

# signup page render 
def signupPage(request): 
    if not request.user.is_staff: 
        return render(request, 'market_app/signup.html')
    else: 
        return redirect(request,'/')
# costumer user functionally start 
def signup(request):
  if request.method == "POST":
    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    user = User.objects.create_user(username,email,password)
    user.is_staff=True
    user.save()
    messages.success(request,"Now you can login ")
    return redirect('/login')
  return render(request, 'signup.html')

def UserLogin(request): 
    if request.method == 'POST':
      username= request.POST['username']
      password= request.POST['password']
      user = authenticate(username=username,password=password)
      if user is not None:
        login(request,user)
        return redirect('/')
      else:
        messages.error(request,'incorrect username or password')
        return redirect('/login')
    if request.user.is_staff:
      return redirect('/')
    else:
        return render(request,'market_app/login.html')
    
def handelLogout(request):
  if request.user.is_staff:
    logout (request)
    return redirect('/login')
  else:
    return redirect('/')
  
# market list
def marketList(request):
   if request.user.is_staff:
      stockList= StockList.objects.all()
      data = {
        "stockList":stockList
      }
      return render(request, 'market_app/marketList.html',data)
   else:
      return redirect('/login')


# deposit balance 
def deposit(request):
    if request.user.is_staff:  # Check if the user is logged in
        try:
            user_account = UserFinanceAccount.objects.get(user=request.user)
        except UserFinanceAccount.DoesNotExist:
            # If the user does not have a finance account, create one
            user_account = UserFinanceAccount.objects.create(user=request.user, balance=0)
        
        if request.method == 'POST':
            balance = request.POST.get('balance')
            old_balance = user_account.balance
            new_balance = int(old_balance) + int(balance)
            user_account.balance = new_balance
            user_account.save()
            save_activity(
                user=request.user,
                activity_title="Deposit amount",
                activity_type="Deposit",
                extra_data=balance,
            )
            messages.success(request, 'Balance updated')
            return redirect('/')
        else:
            return render(request, 'market_app/deposit.html')
    else:
        return redirect('/login')
    


# create a trade 
def createTrade(request):
  if request.user.is_staff:  # Check if the user is logged 
     if request.method == 'POST':
        user = request.user
        stock_symbol = request.POST.get('stock_symbol')
        trade_price = request.POST.get('trade_price')
        trade_amount = request.POST.get('trade_amount')
        trade_type = request.POST.get('trade_type')
        # check balance 
        try:
            user_account = UserFinanceAccount.objects.get(user=user)
        except UserFinanceAccount.DoesNotExist:
            # If the user does not have a finance account, create one
            user_account = UserFinanceAccount.objects.create(user=user, balance=0)
        if user_account.balance < int(trade_price) * int(trade_amount):
            messages.error(request, 'Insufficient balance')
            return redirect('/')
        else:
            user_account.balance -= int(trade_price) * int(trade_amount)
            user_account.save()
            save_activity(
                user=user,
                activity_title="Trade amount",
                activity_type="Trade",
                extra_data=trade_amount,
            )
            # save trade history
            trade_history = TradeHistory.objects.create(
                user=user,
                stock=stock_symbol,
                trade_type=trade_type,
                trade_price=trade_price,
                trade_amount=trade_amount,
            )
            trade_history.save()
            messages.success(request, 'Trade completed')
            return redirect('/')