@extends('backend.layout.authentication')
@section('title', 'Login')

@section('content')
<div class="row">
    <div class="col-lg-4 col-sm-12">
        <form class="card auth_form" method="post" action="{{ route('backend.login') }}">
            @csrf
            <div class="header">
                <img class="logo" src="{{asset('assets/backend/images/logo.svg')}}" alt="">
                <h5>Log in</h5>
            </div>
            <div class="body">

                @if ($errors->any())
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </div>
                @endif

                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="email" placeholder="Email">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="zmdi zmdi-account-circle"></i></span>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" name="password" placeholder="Password">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="zmdi zmdi-lock"></i></span>
                    </div>
                </div>
                <div class="checkbox">
                    <input id="remember_me" name="remember"  type="checkbox">
                    <label for="remember_me">Remember Me</label>
                </div>
                <button type="submit" class="btn btn-primary btn-block waves-effect waves-light">SIGN IN</button>
                <div class="signin_with mt-3">
                </div>
            </div>
        </form>
        <div class="copyright text-center">
            &copy;
            <script>document.write(new Date().getFullYear())</script>,
        </div>
    </div>
    <div class="col-lg-8 col-sm-12">
        <div class="card">
            <img src="{{asset('assets/backend/images/signin.svg')}}" alt="Sign In"/>
        </div>
    </div>
</div>
@stop
