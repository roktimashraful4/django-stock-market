
function chartTheme3(){
	if($('body').attr('data-theme-version') == "light"){
		return "Light";
	}else{
		return "Dark";
	}
}
function tradingchartIntra(){
  new TradingView.widget(
	{
	  "width": "100%",
	  "height": 516,
	  "symbol": "BITSTAMP:BTCUSD",
	  "interval": "D",
	  "timezone": "Etc/UTC",
	  "theme": chartTheme3(),
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
	  "details": true,
		"hotlist": true,
		"calendar": true,
	  "container_id": "tradingview_85dc0"
	}
  );
}


jQuery(window).on('load',function(){
	jQuery('#theme_version').on('change',function(){
		tradingchartIntra();
	});
	setTimeout(function(){
		tradingchartIntra();
	}, 1000); 
	
});