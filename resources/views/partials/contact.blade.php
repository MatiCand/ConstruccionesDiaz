<div class="page-title">
	<div class="inner">
		<div class="container">
			<div class="title">Contáctenos</div>
		</div> <!-- end .container -->
	</div> <!-- end .inner -->
	<div id="map" class="map"></div>
</div> <!-- end .page-title -->

<div class="section white no-padding-bottom">
	<div class="inner">
		<div class="container">

			<h1 class="center-heading"><small>ESTAMOS AQUÍ</small>Contáctenos</h1>
			<div class="contacts row">
				<div class="contact col-sm-3">
					<div class="icon"><i class="fa fa-envelope-o"></i></div>
					<span>construccionesdiaz10@hotmail.com</span>
				</div> <!-- end .contact -->
				<div class="contact col-sm-3">
					<div class="icon"><i class="fa fa-phone"></i></div>
					<span>15 2283 7730</span>
				</div> <!-- end .contact -->
				<div class="contact col-sm-3">
					<div class="icon"><i class="fa fa-skype"></i></div>
					<span>construccionesdiaz</span>
				</div> <!-- end .contact -->
				<div class="contact col-sm-3">
					<div class="icon"><i class="fa fa-map-marker"></i></div>
					<span>Malvinas Argentinas | Buenos Aires</span>
				</div> <!-- end .contact -->
			</div> <!-- end .contacts -->


			<div class="row" id="contact">
				<br>
				<h1 class="center-heading"><small>Envianos tu consulta, la responderemos lo más rápido posible</small>Consultar</h1>
				<div class="col-sm-10 col-sm-offset-1">
					<div class="contact-form-stripes"></div>
					<div class="contact-form-wrapper">

            {!! Form::open(['route'=>'mail.store','method' => 'POST','class' => 'form contact-form','id' => 'contact-form']) !!}
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										{!! Form::text('name',null,['placeholder' => 'Nombre*', 'class' => 'ci-field form-control', 'required']) !!}
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										{!! Form::text('email',null,['placeholder' => 'Email*', 'class' => 'ci-field form-control', 'required']) !!}
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
											{!! Form::tel('phone',null,['placeholder' => 'Teléfono*', 'class' => 'ci-field form-control', 'required']) !!}
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
											{!! Form::text('motivo',null,['placeholder' => 'Motivo*', 'class' => 'ci-field form-control', 'required']) !!}
									</div>
								</div>
								<div class="col-sm-12">
									<div class="form-group">
										{!! Form::textarea('mensaje',null,['placeholder' => 'Mensaje*','class' => 'ci-area form-control', 'required' ]) !!}
									</div>
								</div>
							</div>

							<div class="form-group">
								{!! Form::submit('ENVIAR CONSULTA',['class' => 'submit_btn btn btn-mod btn-large btn-full ci-btn' ]) !!}
							</div>

						</form>

					</div> <!-- end .contact-form-wrapper -->
				</div> <!-- end .col-sm-10 -->
			</div> <!-- end .row -->


		</div> <!-- end .container -->
	</div> <!-- end .inner -->
</div> <!-- end .section -->
