// to do: process csv file for detailed information
// 

(function($, window, document) {
	
	$(function() {
		console.log($.parseJSON(localStorage.getItem('boxesData')))
		$('#cld').on('click', function () {
			cleardata();
		});
		$('#faqs-modal .modal-body').slimscroll({
            height: "400px",
            size: "5px",
            alwaysVisible: false,
            wheelStep:1,
            size: "3px"
        });
        if (check_localStorage()) {
        	render_box(1);
        };
		$('#cim').on('click', function () {
			$('#import-modal').modal('show');
		});
		$('#cfm').on('click', function () {
			$('#faqs-modal').modal('show');
		});
		$('.show-info').popover({
            animation: true,
            placement: 'right',
            selector: false,
            trigger: 'hover',
            delay: 0,
            html: true,
        });
		$('#impd').on('click', function() {
			rawdata = $('#import-modal textarea').val();
			format = $('[name="format"]:checked').attr('id');
			console.log(format);
			if (rawdata != '') {
				process_boxes_data(rawdata, format);
				render_box($('.poke-box').attr('data-box-num'));
				$('#import-modal').modal('hide');
			} else {
				return;
			}
			
		});
		$('.box-list li a').on('click', function (event) {
			event.preventDefault();
			id = $(this).attr('href').replace("#B", "");
			switchbox(id);
		});
		$('.switch-box').on('click', function () {
			id = $(this).attr('data-to-box');
			switchbox(id);
		});
	});
	var base_url = '';
	var stats = ['hp', 'atk', 'def', 'satk', 'sdef', 'spd'];
	var reset_boxes = function() {
		$('.show-info img').attr('src', base_url+'public/images/favicon.ico');
		$('.show-info').attr('data-original-title', '');
		$('.show-info').attr('data-content', 'Empty slot');
	}
	var cleardata = function() {
		localStorage.removeItem('boxesData');
		reset_boxes();
	}
	var rawdata = '';
	function process_boxes_data(str, format) {
		var boxes = {};
		reset_boxes();
		switch (format) {
			case 'csv':
				console.log('processing csv');
				temp = str.split("\n").slice(1);
				// console.log(temp);
				for (var i = 0; i < temp.length; i++) {
					pkm = temp[i];
					var properties = pkm.split(",");
					// if (properties.length != 31) {
					// 	return;
					// };
					box_no = properties[0].replace('B', '')*1;
					b_r = properties[1];
					b_c = properties[2];
					pos = b_r+'-'+b_c;
					if (boxes[box_no] == undefined) {
						boxes[box_no] = {};
					};
					if (boxes[box_no][pos] == undefined) {
						boxes[box_no][pos] = {};
					};
					boxes[box_no][pos]['species'] = properties[3];
					boxes[box_no][pos]['gender'] = properties[4];
					boxes[box_no][pos]['nature'] = properties[5];
					boxes[box_no][pos]['ability'] = properties[6];
					boxes[box_no][pos]['hp_iv'] = properties[7];
					boxes[box_no][pos]['atk_iv'] = properties[8];
					boxes[box_no][pos]['def_iv'] = properties[9];
					boxes[box_no][pos]['satk_iv'] = properties[10];
					boxes[box_no][pos]['sdef_iv'] = properties[11];
					boxes[box_no][pos]['spd_iv'] = properties[12];
					boxes[box_no][pos]['hp_type'] = properties[13];
					boxes[box_no][pos]['esv'] = properties[14];
					boxes[box_no][pos]['tsv'] = properties[15];
					boxes[box_no][pos]['nname'] = properties[16];
					boxes[box_no][pos]['ot'] = properties[17];
					boxes[box_no][pos]['ball'] = properties[18];
					boxes[box_no][pos]['tid'] = properties[19];
					boxes[box_no][pos]['sid'] = properties[20];
					boxes[box_no][pos]['hp_ev'] = properties[21];
					boxes[box_no][pos]['atk_ev'] = properties[22];
					boxes[box_no][pos]['def_ev'] = properties[23];
					boxes[box_no][pos]['satk_ev'] = properties[24];
					boxes[box_no][pos]['sdef_ev'] = properties[25];
					boxes[box_no][pos]['spd_ev'] = properties[26];
					boxes[box_no][pos]['move1'] = properties[27];
					boxes[box_no][pos]['move2'] = properties[28];
					boxes[box_no][pos]['move3'] = properties[29];
					boxes[box_no][pos]['move4'] = properties[30];
				};
			break;

			case 'reddit':
				temp = str.replace("| Box | Slot | Name | Nature | Ability | Spread | SV\n|:--|:--|:--|:--|:--|:--|:--\n", "").replace(/^\s+|\s+$/g, '').split("\n");
				for (var i = 0; i < temp.length; i++) {
					pkm = temp[i];
					var properties = pkm.split(" | ");
					box_no = properties[0].replace('| B', '')*1;
					pos = properties[1].split(",").join('-');
					if (boxes[box_no] == undefined) {
						boxes[box_no] = {};
					};
					if (boxes[box_no][pos] == undefined) {
						boxes[box_no][pos] = {};
					};
					properties[properties.length-1] = properties[properties.length-1].replace(' |', '');
					boxes[box_no][pos]['species'] = properties[2].replace(" (M)", "").replace(" (F)", "");
					boxes[box_no][pos]['gender'] = "-";
					if (properties[2].indexOf(" (M)") != -1) {
						boxes[box_no][pos]['gender'] = "♂";
					};
					if (properties[2].indexOf(" (F)") != -1) {
						boxes[box_no][pos]['gender'] = "♀";
					}; 
					boxes[box_no][pos]['nature'] = properties[3];
					boxes[box_no][pos]['ability'] = properties[4];
					spread = properties[5].split(".");
					boxes[box_no][pos]['hp_iv'] = spread[0];
					boxes[box_no][pos]['atk_iv'] = spread[1];
					boxes[box_no][pos]['def_iv'] = spread[2];
					boxes[box_no][pos]['satk_iv'] = spread[3];
					boxes[box_no][pos]['sdef_iv'] = spread[4];
					boxes[box_no][pos]['spd_iv'] = spread[5];
					boxes[box_no][pos]['esv'] = "";
					if (properties[6] != undefined) {
						boxes[box_no][pos]['esv'] = properties[6];
					};
				};
			break;

			default:

			break;
		}
		
		localStorage.setItem('boxesData', JSON.stringify(boxes));
		console.log(boxes);
		return boxes;
	}
	function render_box(b_n) {
		reset_boxes();
		boxes = JSON.parse(localStorage.getItem('boxesData'));
		if ( boxes == undefined || boxes[b_n] == undefined) {
			reset_boxes();
			return;
		};
		// console.log(boxes);
		box = boxes[b_n];
		
		// console.log(box);
		$.each(box, function(index, val) {
			// console.log(val)
			species = val.species;
			gender = "";
			if (val['gender'] != "-") {
				gender = val.gender;
			};
			nature = val.nature;
			ability = val.ability;
			esv = val.esv;
			pos = index;
			iv_spread = []
			$.each(stats, function(ind, el) {
				if (val[el+'_iv'] != 31) {
					iv_spread[ind] = val[el+'_iv'];
				} else {
					iv_spread[ind] = '<b class="text-red">31</b>';
				}
			});
			iv = iv_spread.join('-');
			image = '<img src="'+base_url+'public/images/minisprites/'+species+'.png" alt="">';
			data = "<table class='table-condensed'><tr><th>Nature</th><td>"+nature+"</td></tr><tr><th>Ability</th><td>"+ability+"</td></tr><tr><th>IVs Spread</th><td>"+iv+"</td></tr>";
			if (esv != "") {
				data+="<tr><th>ESV</th><td>"+esv+"</td></tr>";
				species = '<b class="text-red">[EGG]</b> '+species;
			};
			data += "</table>";
			$('#'+pos+' button').attr('data-content', data).attr('data-original-title', species+" "+gender).empty().append(image);
		});
	}
	function check_localStorage() {
		if (localStorage.getItem('boxesData') != null) {
			return true;
		} else {
			return false;
		}
	}
	function switchbox(b_n) {
		switch (b_n) {
			case "1":
				$('.to-prev-box').attr('data-to-box', '31');
				$('.to-next-box').attr('data-to-box', '2');
				break;
			case "31":
				$('.to-prev-box').attr('data-to-box', '30');
				$('.to-next-box').attr('data-to-box', '1');
				break;
			default:
				$('.to-prev-box').attr('data-to-box', (b_n*1-1));
				$('.to-next-box').attr('data-to-box', (b_n*1+1));
				break;
		}
		render_box(b_n);
		boxname = 'Box '+b_n;
		$('.box-title').text(boxname);
		$('.box-num').text(b_n);
	}
}(window.jQuery, window, document));