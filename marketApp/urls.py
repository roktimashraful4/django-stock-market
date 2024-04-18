from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='Dashboard'),
    path('signup', views.signupPage, name='signup' ),
    path('signup-handle', views.signup, name='signup' ),
    path('login', views.UserLogin, name='login' ),
    path('logout',views.handelLogout,name='logout'),
    path('market-list', views.marketList, name='marketList'),
    path('deposit', views.deposit, name='deposit'),
]
