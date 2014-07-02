// to do: process csv file for detailed information
// 

(function($, window, document) {
	
	$(function() {
		if (localStorage.getItem("boxesdata") != null) {
			process_box_data(localStorage.getItem("boxesdata"));
		};
		$('#cim').on('click', function () {
			$('#import-modal').modal('show');
		});
		$('#cld').on('click', function () {
			cleardata();
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
			localStorage.setItem('boxesdata', rawdata);
			process_box_data(rawdata);
			$('#import-modal').modal('hide');
		});
		$('.box-list li a').on('click', function () {
			id = $(this).attr('href');
			switchbox(id);
		});
		$('.switch-box').on('click', function () {
			id = $(this).attr('data-to-box');
			switchbox(id);
		});
	});
	var base_url = '';
	var reset_boxes = function() {
		$('.show-info img').attr('src', base_url+'public/images/favicon.ico');
		$('.show-info').attr('data-original-title', '');
		$('.show-info').attr('data-content', 'Empty slot');
	}
	var cleardata = function() {
		localStorage.removeItem('boxesdata');
		reset_boxes();
	}
	var rawdata = '';
	function process_box_data(str) {
		reset_boxes();
		temp = str.replace("| Box | Slot | Name | Nature | Ability | Spread | SV\n|:--|:--|:--|:--|:--|:--|:--\n", "").replace(/^\s+|\s+$/g, '').split("\n");
		for (var i = 0; i < temp.length; i++) {
			pkm = temp[i];
			var properties = pkm.split(" | ");
			properties[0] =properties[0].replace('| ', '')
			properties[properties.length-1] = properties[properties.length-1].replace(' |', '');
			box = properties[0];
			position = properties[1].split(",");
			species = properties[2];
			data_species = species.replace(" (M)", "").replace(" (F)", ""); 
			nature = properties[3];
			ability = properties[4];
			spread = properties[5].replace(/31/g, '<b class="text-red">31</b>').replace(/\./g, "-");
			if (properties[6]) {
				esv = properties[6];
			};
			// console.log(properties);
			image = '<img src="'+base_url+'public/images/minisprites/'+data_species+'.png" alt="">';
			data = "<table class='table-condensed'><tr><th>Nature</th><td>"+nature+"</td></tr><tr><th>Ability</th><td>"+ability+"</td></tr><tr><th>IVs Spread</th><td>"+spread+"</td></tr>";
			if (properties[6]) {
				data+="<tr><th>ESV</th><td>"+esv+"</td></tr>";
				species = '<b class="text-red">[EGG]</b> '+species;
			};
			data += "</table>";
			$('#'+box+' #'+position[0]+'-'+position[1]+" button").attr('data-content', data).attr('data-original-title', species).empty().append(image);
		};
		
	}
	function switchbox(id, name) {
		currentbox = id;
		switch (currentbox) {
			case "#B1":
				$('.to-prev-box').attr('data-to-box', '#B30');
				$('.to-next-box').attr('data-to-box', '#B2');
				break;
			case "#B30":
				$('.to-prev-box').attr('data-to-box', '#B29');
				$('.to-next-box').attr('data-to-box', '#B1');
				break;
			default:
				cbn = currentbox.replace( /^\D+/g, '');
				$('.to-prev-box').attr('data-to-box', '#B'+(cbn*1-1));
				$('.to-next-box').attr('data-to-box', '#B'+(cbn*1+1));
				break;
		}
		boxname = 'Box '+currentbox.replace( /^\D+/g, '');
		$('.poke-box:visible').hide();
		$(id).show();
		$('.box-title').text(boxname);
		$('.box-num').text(id);
	}
}(window.jQuery, window, document));