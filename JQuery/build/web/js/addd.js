$(document).ready(function() {
	
var count=0;
          $("button").click(function() {
                var itemname = $(this).text();
		var itemvalue = $(this).attr("data-value");
		var qty;
		var itemlength = $('tr').length;
                if(itemlength>2){
                    --itemlength;
                };
                row = "<tr><td>" + itemlength + "</td><td>" + itemname + "</td><td data-value=" + itemvalue + "> " + itemvalue + "</td><td><select value=''><option>1</option ><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td><td >"+itemvalue+"</td></tr>";
                
                if($('.myTable').find('tr').length == 1){
			$('.myTable').append(row)
		}
	else{
		$('.myTable tbody tr:last').before(row);
              }
              update_amounts();
	});
        
	function update_amounts() {
                var tax = 0;
                var taxrate=0;
		var total = 0;
		$('.myTable > tbody  > tr').each(function() {
                     
                        if($(this).find('td:eq(1)').text()=="Item 1"){
                            taxrate=0.05;
                            console.log(taxrate);
                        }else if($(this).find('td:eq(1)').text()=="Item 2"){
                            taxrate=0.10;
                            console.log(taxrate);
                        }else if($(this).find('td:eq(1)').text()=="Item 3"){
                            taxrate=0.15;
                            console.log(taxrate);
                        }else if($(this).find('td:eq(1)').text()=="Item 4"){
                            taxrate=0.20;
                            console.log(taxrate);
                        }else if($(this).find('td:eq(1)').text()=="Item 5"){
                            taxrate=0.25;
                            console.log(taxrate);
                        }else{
                            taxrate=0.50;
                            console.log(taxrate);
                        }
			if (!$(this).hasClass('totals')) {
				var x = parseInt($(this).find('td:last').text());
                                aftertax=(taxrate*x)+x;
				total += aftertax;
                                
			}
		});
		console.log(total);
//                console.log(tax.toFixed(2));
//                console.log(aftertax.toFixed(2));
		if ($('.totals').length == 0) {
//                    var totalTax = "<tr class='totals'><td class='text-right' colspan='4'>Tax</td><td class='totalamount'>" + tax.toFixed(2) + "</td></tr>";
//			$('.myTable').append(totalTax);
			var totalRow = "<tr class='totals after tax'><td class='text-right' colspan='4'>Total</td><td class='totalamount'>" + total.toFixed(2) + "</td></tr>";
			$('.myTable').append(totalRow);
		} else {
			$('.totalamount').text(total.toFixed(2));
               }
               
	}
$('.myTable').on("change", 'select', function() {
		var qty = $(this).val();
		var itemvalue = parseInt($(this).parent().parent().find('[data-value]').text());
		var amount = qty * itemvalue;
		console.log(amount);
		$(this).parent().parent().find('td:last').text(amount.toFixed(2));
		update_amounts()
	});
});

