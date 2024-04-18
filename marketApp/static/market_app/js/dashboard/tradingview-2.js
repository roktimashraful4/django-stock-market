
function chartThemeDark(){
	if($('body').attr('data-theme-version') == "dark"){
		return "Dark";
	}else{
		return "Light";
	}
}

function tradingChartDark(){
   new TradingView.widget(
	{
	  "width": "100%",
	  "height": 516,
	  "symbol": "BITSTAMP:BTCUSD",
	  "interval": "D",
	  "timezone": "Etc/UTC",
	  "theme": chartThemeDark(),
	  "style": "1",
	  "locale": "en",
	  "toolbar_bg": "#f1f3f6",
	  "enable_publishing": false,
	  "withdateranges": true,
	  "hide_side_toolbar": false,
	  "allow_symbol_change": true,
	  "show_popup_button": true,
	  "popup_width": "1000",
	  "popup_height": "650",
	  "container_id": "tradingview_85dc0"
	}
  );
}


jQuery(window).on('load',function(){
	jQuery('#theme_version').on('change',function(){
		tradingChartDark();
	});
	setTimeout(function(){
	tradingChartDark();
	}, 2000); 
	
});