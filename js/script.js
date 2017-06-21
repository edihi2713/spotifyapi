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
                'Authorization': 'Bearer ' + 'BQASaBnCyB3FO4HR8xvfz-wRAhhOKZzPBechNp48DIXUMC1HMYLr74muDvQt7DO2u9RjOE5fVYxinX-jguK0YDnH6ZBFhKn9z0CewV51K4YKVzsz-4_vUmL-7gxc8kbo83tTfXcYRFyNKUWevxj6fQ'
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
