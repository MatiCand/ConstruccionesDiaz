<!DOCTYPE html>
<html lang="es">
	<head>

		@include('partials.head')
		<title>@yield('title', 'Construcciones Diaz')</title>

	</head>
	<body>

		<div id="fb-root"></div>
		<script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.8";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>


		{{-- cartel de mensaje enviado --}}
		@if (Session::has('message'))
			<div class="alert-message alert-success" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				{{ Session::get('message') }}
				<strong>Muchas Gracias!!</strong>
			</div>
		@endif

			@include('partials.head')
			@include('partials.header')
			@include('partials.services')
			@include('partials.projects')
			@include('partials.testimonials')
			@include('partials.newsletter')
			@include('partials.contact')
			@include('partials.footer')

		<footer>
			@include('partials.js')
		</footer>

	</body>
</html>
