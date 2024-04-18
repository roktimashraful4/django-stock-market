

(function($) {
    /* "use strict" */
	
 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
	let draw = Chart.controllers.line.__super__.draw; //draw shadow
	
	
	var UiSlider = function() {
		const employees1 = document.querySelector("#employees1")
			var labels = { 1: '1', 10: '10', 15: '15', 20: '20', 25: '25', 40: '40', 50: '50', 70: '70', 75: '75', 100: '100', 100: '100', };
			noUiSlider.create(employees1, {
			  start: 25,
			  connect: [true, false],
			  tooltips: {
				to: function(value) {
					return value > 100 ? '100+' : parseInt(value)
				}
			  },
			  range: {
				'min': 1,
				'25%': 25,
				'50%': 50,
				'75%': 75,
				'max': 100
			  },
			  pips: {
				mode: 'steps',
				filter: function (value, type) {
				  return type === 0 ? -1 : 1;
				},
				format: {
				  to: function (value) {
					return labels[value];
				  }
				}
			  }
			});
	}
	var UiSlider1 = function() {
		const employees = document.querySelector("#employees")
			var labels = { 1: '1', 10: '10', 15: '15', 20: '20', 25: '25', 40: '40', 50: '50', 70: '70', 75: '75', 100: '100', 100: '100', };
			noUiSlider.create(employees, {
			  start: 25,
			  connect: [true, false],
			  tooltips: {
				to: function(value) {
					return value > 100 ? '100+' : parseInt(value)
				}
			  },
			  range: {
				'min': 1,
				'25%': 25,
				'50%': 50,
				'75%': 75,
				'max': 100
			  },
			  pips: {
				mode: 'steps',
				filter: function (value, type) {
				  return type === 0 ? -1 : 1;
				},
				format: {
				  to: function (value) {
					return labels[value];
				  }
				}
			  }
			});
	}
	var swiperreview = function() {
		
		var swiper = new Swiper('.mySwiper', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 20,
			loop:false,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				
			  300: {
				slidesPerView: 1,
				spaceBetween: 30,
			  },
			  416: {
				slidesPerView: 2,
				spaceBetween: 30,
			  },
			   768: {
				slidesPerView: 2,
				spaceBetween: 30,
			  },
			   1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			  },
			  1788: {
				slidesPerView: 4,
				spaceBetween: 30,
			  },
			},
		});
		$('#container_layout').on('change',function(){
			if($('body').attr('data-container') == "boxed" || "wide-boxed"){
				swiper.params.slidesPerView = 3
			}else{
				swiper.params.slidesPerView = 4
			}
		})
	}
	var swiperreviewdark = function() {
		
		var swiper = new Swiper('.mySwiperdark', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 20,
			loop:false,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				
			  300: {
				slidesPerView: 1,
				spaceBetween: 30,
			  },
			  416: {
				slidesPerView: 2,
				spaceBetween: 30,
			  },
			   768: {
				slidesPerView: 2,
				spaceBetween: 30,
			  },
			   1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			  },
			  1788: {
				slidesPerView: 4,
				spaceBetween: 30,
			  },
			},
		});
		$('#container_layout').on('change',function(){
			if($('body').attr('data-container') == "boxed"){
				swiper.params.slidesPerView = 3
			}else{
				swiper.params.slidesPerView = 4
			}
		})
	}
	var swipercard = function() {
		var swiper = new Swiper('.mySwiper-counter', {
			speed: 1500,	
			slidesPerView: 4,
			spaceBetween: 40,
			parallax: true,
			loop:false,
			breakpoints: {
				
			  300: {
				slidesPerView: 1,
				spaceBetween: 30,
			  },	
			  576: {
				slidesPerView: 2,
				spaceBetween: 30,
			  },
			  991: {
				slidesPerView: 3,
				spaceBetween: 30,
			  },
			  1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			  },
			},
		});
	}
	var swipercard2 = function() {
		var swiper = new Swiper('#card-swiper', {
			speed: 1500,
			parallax: true,
			slidesPerView:4,
			spaceBetween: 20,
			loop:false,
			breakpoints: {
				1600: {
					slidesPerView: 4,
				},
				
				1200: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				360: {
					slidesPerView: 1,
				},
			},
		});
	}
	
	var NewCustomers = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [100,300, 200, 250, 200, 240, 180,230,200, 250, 300],
				/* radius: 30,	 */
			}, 				
		],
			chart: {
			type: 'area',
			height: 130,
			width: 400,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
			
		},
		
		colors:['var(--primary)'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 3,
		  curve:'smooth',
		  colors:['var(--primary)'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: -1

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		xaxis: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July','August', 'Sept','Oct'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		yaxis: {
			show: false,
		},
		fill: {
		  opacity: 0.9,
		  colors:'var(--primary)',
		  type: 'gradient', 
		  gradient: {
			colorStops:[ 
				
				{
				  offset: 0,
				  color: 'var(--primary)',
				  opacity: .8
				},
				{
				  offset: 0.6,
				  color: 'var(--primary)',
				  opacity: .6
				},
				{
				  offset: 100,
				  color: 'white',
				  opacity: 0
				}
			  ],
			  
			}
		},
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		}
		};

		var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers"), options);
		chartBar1.render();
	 
	}
	
	var ProfitlossChart = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [200,300, 200, 250, 200, 240, 180,230,200, 250, 200],
				/* radius: 30,	 */
			}, 				
		],
			chart: {
			type: 'area',
			height: 130,
			width: 400,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
			
		},
		
		colors:['var(--primary)'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 3,
		  curve:'smooth',
		  colors:['#C0E192'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		xaxis: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July','August', 'Sept','Oct'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		yaxis: {
			show: false,
		},
		
		fill: {
		  opacity: 0.9,
		  colors:'#C0E192',
		  type: 'gradient', 
		  gradient: {
			colorStops:[ 
				
				{
				  offset: 0,
				  color: '#C0E192',
				  opacity: .8
				},
				{
				  offset: 0.6,
				  color: '#C0E192',
				  opacity: .6
				},
				{
				  offset: 100,
				  color: 'white',
				  opacity: 0
				}
			  ],
			  
			}
		},
		
		/* fill: {
		  opacity: 0.9,
		  colors:'#C0E192'
		}, */
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		}
		};

		var chartBar1 = new ApexCharts(document.querySelector("#ProfitlossChart"), options);
		chartBar1.render();
	 
	}
	var TotaldipositChart = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [200,300, 200, 250, 200, 240, 180,230,200, 200, 200],
				/* radius: 30,	 */
			}, 				
		],
			chart: {
			type: 'area',
			height: 130,
			width: 400,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
			
		},
		
		colors:['var(--primary)'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 3,
		  curve:'smooth',
		  colors:['#DE97DF'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		xaxis: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July','August', 'Sept','Oct'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		yaxis: {
			show: false,
		},
		fill: {
		  opacity: 0.9,
		  colors:'#DE97DF',
		  type: 'gradient', 
		  gradient: {
			colorStops:[ 
				
				{
				  offset: 0,
				  color: '#DE97DF',
				  opacity: .8
				},
				{
				  offset: 0.6,
				  color: '#DE97DF',
				  opacity: .6
				},
				{
				  offset: 100,
				  color: 'white',
				  opacity: 0
				}
			  ],
			  
			}
		},
		/* fill: {
		  opacity: 0.9,
		  colors:'#DE97DF'
		}, */
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		}
		};

		var chartBar1 = new ApexCharts(document.querySelector("#TotaldipositChart"), options);
		chartBar1.render();
	 
	}
	var donutChart = function(){
		Morris.Donut({
			element: 'morris_donught',
			data: [{
				label: "\xa0 \xa0 Promotion \xa0 \xa0",
				value: 12,

			}, {
				label: "\xa0 \xa0 In-Store Sales \xa0 \xa0",
				value: 30
			},{
				label: "\xa0 \xa0 In-Store Sales \xa0 \xa0",
				value: 30
			}, {
				label: "\xa0 \xa0 Mail-Order Sales \xa0 \xa0",
				value: 20
			}],
			resize: true,
			redraw: true,
			colors: ['#E085E4', '#2A353A', '#C0E192','#9568ff'],
			//responsive:true,
			
		});
	}
	
	var chartBar = function(){
		var options = {
			  series: [
				{
					name: 'Running',
					data: [96, 60, 90],
					//radius: 12,	
				}, 
				{
				  name: 'Cycling',
				  data: [80, 40, 55]
				}, 
				
			],
				chart: {
				type: 'bar',
				height: 170,
				
				toolbar: {
					show: false,
				},
				
			},
			plotOptions: {
			  bar: {
				horizontal: false,
				columnWidth: '100%',
				endingShape: "rounded",
				borderRadius: 8,
			  },
			  
			},
			states: {
			  hover: {
				filter: 'none',
			  }
			},
			colors:['var(--primary)', 'var(--secondary)'],
			dataLabels: {
			  enabled: true,
			  offsetY: -30
			  
			  ,
			  style: {
				fontSize: '14px',
				fontWeight: '600',
			},
			},
			markers: {
		shape: "circle",
		},
		
		
			legend: {
				show: false,
				fontSize: '12px',
				labels: {
					colors: '#000000',
					
					},
				markers: {
				width: 18,
				height: 18,
				strokeWidth: 10,
				strokeColor: '#fff',
				fillColors: undefined,
				radius: 12,	
				}
			},
			stroke: {
			  show: true,
			  width:20,
			  curve: 'smooth',
			  lineCap: 'round',
			  colors: ['transparent']
			},
			grid: {
				show: false,
				xaxis: {
					lines: {
						show: false,
					}
				},
				 yaxis: {
						lines: {
							show: false
						}
					},  				
			},
			xaxis: {
				categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
				labels: {
					show: false,
					style: {
						colors: '#A5AAB4',
						fontSize: '14px',
						fontWeight: '500',
						fontFamily: 'poppins',
						cssClass: 'apexcharts-xaxis-label',
					},
				},
				crosshairs: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				}, 			
			},
			yaxis: {
				labels: {
				show: false,
					offsetX:-16,
				   style: {
					  colors: '#000000',
					  fontSize: '13px',
					   fontFamily: 'poppins',
					  fontWeight: 100,
					  cssClass: 'apexcharts-xaxis-label',
				  },
			  },
			},
			};

			var chartBar1 = new ApexCharts(document.querySelector("#chartBar"), options);
			chartBar1.render();
	}
	
 
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				UiSlider();
				UiSlider1();
				swiperreview();
				swipercard();
				swiperreviewdark();
				swipercard2();
				NewCustomers();
				ProfitlossChart();
				TotaldipositChart();
				chartBar();
				donutChart();
				
			},
			
			resize:function(){
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

     

})(jQuery);
