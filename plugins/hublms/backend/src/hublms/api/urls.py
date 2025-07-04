from django.urls import re_path

from .views import StartingView, ExampleView, CoursesView
app_name = "hublms.api"


urlpatterns = [
    re_path(r"starting/$", StartingView.as_view(), name="starting"),
    re_path(r'example/$', ExampleView.as_view(), name='example'),
    re_path(r'courses/$', CoursesView.as_view(), name='courses'),

]