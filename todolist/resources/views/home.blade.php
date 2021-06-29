@extends('layouts.app')

@section('content')
    <main id="app">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <sidebar></sidebar>
                </div>
                <div class="col-md">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </main>
@endsection
