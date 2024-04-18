from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class StockList(models.Model):
    name = models.CharField(max_length=100)
    short_name = models.CharField(("Short Name"), blank=True, max_length=50)
    stock_symbol = models.FileField(("Image"), upload_to='uploads/stocks', max_length=100)
    change = models.CharField(("change"), max_length=50)
    market_cap = models.CharField(("Market Cap"), max_length=50) 
    price = models.IntegerField(("Price")) 

    class Meta:
        verbose_name = ("StockList")
        verbose_name_plural = ("StockLists")
    def __str__(self):
        return self.name

class UserFinanceAccount(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    balance = models.CharField(("Balance"), max_length=50) 
    

    class Meta:
        verbose_name = ("UserFinanceAccount")
        verbose_name_plural = ("UserFinanceAccounts")

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name
    

# save activity models 
class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity_title = models.CharField(("Activity"), max_length=50)
    activity_type = models.CharField(("Type"), max_length=50)
    extra_data = models.CharField(("Extra Data"), blank=True, max_length=50) 
    date = models.DateTimeField(("Date"), auto_now=False, auto_now_add=False)


    class Meta:
        verbose_name = ("Activity")
        verbose_name_plural = ("Activities")

    def __str__(self):
        return self.activity_title
    

# trade history 
class TradeHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stock = models.ForeignKey(StockList, on_delete=models.CASCADE)
    trade_type = models.CharField(("Trade Type"), max_length=50)
    trade_price = models.IntegerField(("Trade Price"))
    trade_amount = models.IntegerField(("Trade Amount"))
    date = models.DateTimeField(("Date"), auto_now=False, auto_now_add=False)


    class Meta:
        verbose_name = ("TradeHistory")
        verbose_name_plural = ("TradeHistories")

    def __str__(self):
        return self.stock_symbol.name + " " + self.trade_type + " " + str(self.trade_price) + " " + str(self.trade_amount)