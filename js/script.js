$(function (){


    var template = Handlebars.compile($('#preview-template').html());

    $('#nombreconsulta').on('keydown',function(e){
    	 if(e.keyCode == 13){

    	 	var consulta = $(this).val();

    	 	if (consulta == "") {
    	 		alert("Debe ingresar el nombre del artista o la canción");
    	 		return;
    	 	}


            $.ajaxSetup({
                headers : {
                'Authorization': 'Bearer ' + 'BQD_6-AE8KsulMJnwekPxerjW1zWBQKcpC9suX9jZLL2rAAsD0vpHtEs53ihL_p8BVKtnpl6J2PR2bndIcaMpsyOCv7D6JDtAFZ1enH0fswR-aIKpTgrNc1p5-6TMNC94NJNOETtlXrodj7yBy6XTF76tQIeCV0ZtHdj7C62qDlflc6UOF4BeMzqCZZraXd7NnT_A8TQoxrDLQzc32KTUEcK6p148Qe-i0Y'
            }
            })
               


           $.getJSON("https://api.spotify.com/v1/search?q="+consulta+"&type=track", function(songs){
            console.log(songs);
             $.each(songs.tracks.items, function(index) {

             var songObject = { 
              imageUrl: songs.tracks.items[index].album.images[0].url, 
              artist: songs.tracks.items[index].album.artists[0].name, 
              songname: songs.tracks.items[index].name,
              previewsong: songs.tracks.items[index].preview_url,
            };
            
            
            $('.songrow').append(template(songObject));
                
            });

           })

        }
    });

});
