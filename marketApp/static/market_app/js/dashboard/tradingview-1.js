
function chartTheme(){
	if($('body').attr('data-theme-version') == "light"){
		return "Light";
	}else{
		return "Dark";
	}
}
function tradingChart(){
  new TradingView.widget(
	{
	  "width": "100%",
	  "height": 516,
	  "symbol": "BITSTAMP:BTCUSD",
	  "interval": "D",
	  "timezone": "Etc/UTC",
	  "theme": chartTheme(),
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
	  "container_id": "tradingview_e8053"
	}
  );
}


jQuery(window).on('load',function(){
	jQuery('#theme_version').on('change',function(){
		tradingChart();
	});
	setTimeout(function(){
	}, 1000); 
		tradingChart();
	
});