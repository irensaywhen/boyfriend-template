<!-- Left Sidebar -->
<aside id="leftsidebar" class="sidebar">
    <div class="navbar-brand">
        <button class="btn-menu ls-toggle-btn" type="button"><i class="zmdi zmdi-menu"></i></button>
        <a href=""><img src="../assets/images/logo.svg" width="25" alt="Aero"><span class="m-l-10">Aero</span></a>
    </div>
    <div class="menu">
        <ul class="list">
            <li>
                <div class="user-info">
                    <div class="image"><a href="#"><img src="../assets/images/profile_av.jpg" alt="User"></a></div>
                    <div class="detail">
                        <h4>Michael</h4>
                        <small>Super Admin</small>
                    </div>
                </div>
            </li>
            <li class="{{ Request::segment(1) === 'dashboard' ? 'active open' : null }}"><a href=""><i class="zmdi zmdi-home"></i><span>Dashboard</span></a></li>
            <li class="{{ Request::segment(1) === 'my-profile' ? 'active open' : null }}"><a href=""><i class="zmdi zmdi-account"></i><span>My Profile</span></a></li>
            <li class="{{ Request::segment(1) === 'app' ? 'active open' : null }}">
                <a href="#App" class="menu-toggle"><i class="zmdi zmdi-apps"></i> <span>App</span></a>
                <ul class="ml-menu">
                    <li class="{{ Request::segment(2) === 'inbox' ? 'active' : null }}"><a href="">Inbox</a></li>
                    <li class="{{ Request::segment(2) === 'chat' ? 'active' : null }}"><a href="">Chat</a></li>
                    <li class="{{ Request::segment(2) === 'calendar' ? 'active' : null }}"><a href="">Calendar</a></li>
                    <li class="{{ Request::segment(2) === 'contact-list' ? 'active' : null }}"><a href="">Contact list</a></li>
                </ul>
            </li>
            <li class="{{ Request::segment(1) === 'project' ? 'active open' : null }}">
                <a href="#Project" class="menu-toggle"><i class="zmdi zmdi-assignment"></i> <span>Project</span></a>
                <ul class="ml-menu">
                    <li class="{{ Request::segment(2) === 'project-list' ? 'active' : null }}"><a href="">Project List</a></li>
                    <li class="{{ Request::segment(2) === 'taskboard' ? 'active' : null }}"><a href="">Taskboard</a></li>
                    <li class="{{ Request::segment(2) === 'ticket-list' ? 'active' : null }}"><a href="">Ticket List</a></li>
                    <li class="{{ Request::segment(2) === 'ticket-detail' ? 'active' : null }}"><a href="">Ticket Detail</a></li>
                </ul>
            </li>
        </ul>
    </div>
</aside>
