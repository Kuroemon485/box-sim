<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Box Simulator | CompetitionDB</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link href="public/img/favicon.ico" type="image/x-icon" rel="shortcut icon">
    <!-- bootstrap 3.0.2 -->
    <link rel="stylesheet" href="public/css/bootstrap.min.css">
    <!-- font Awesome -->
    <link href="public/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <!-- Ionicons -->
    <link href="public/css/ionicons.min.css" rel="stylesheet" type="text/css"/>
    <!-- Theme style -->
    <link href="public/css/AdminLTE.css" rel="stylesheet" type="text/css"/>
    <link href="public/css/cdb.css" rel="stylesheet" type="text/css" />
    
<!--    UPLOAD END-->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
</head>
<body class="skin-blue fixed">
<!-- header logo: style can be found in header.less -->
<header class="header">
    <a href="/" class="logo">
        <!-- Add the class icon to your logo image or logo icon to add the margining -->
        Competition<span class="text-green">DB</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </a>
        <div class="fb-like" data-href="competitiondb.io" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true" style="margin-top: 12px; margin-left: 65px;"></div>
    </nav>

</header>
<div class="wrapper row-offcanvas row-offcanvas-left">
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-side sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <!-- <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search..."/>
                    <span class="input-group-btn">
                        <button type='submit' name='seach' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
                    </span>
                </div>
            </form> -->
            <ul class="sidebar-menu">
                <li class="active treeview">
                    <a href="#">
                        <i class="fa fa-briefcase"></i> <span>Box Simulator</span>
                    </a>
                </li>
            </ul>
            <span class="col-md-12" style="text-align: center;">
                <p class="text-muted">©<?php echo '2014 - ' . date('Y'); ?> Wildcat</p>
            </span>
        </section>
        <!-- /.sidebar -->
    </aside>

<aside class="right-side">
<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
        Pokemon X/Y Tools
    </h1>
    <ol class="breadcrumb">
        <li><a href="#">X/Y Tools</a></li>
        <li class="active">Boxes Simulator</li>
    </ol>
</section>
<!-- Main content -->
<section class="content">
	<div class="row">
	 	<div class="col-md-12" id="">
	        <!-- Primary box -->
	        <div class="nav-tabs-custom">
                <ul class="nav nav-tabs pull-right">
                    <li class="active"><a href="#box-data" data-toggle="tab">Box Simulator</a></li>
                    <li class="pull-left header"><button class="btn btn-sm btn-success" id="cfm"><i class="fa fa-question"></i></button></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="box-data">
                        <div class="row">
                            
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-offset-3">
                            
                            <!-- Success box -->
                                <div class="box box-success">
                                    <div class="box-header">
                                        <h3 class="box-title">Box 1</h3>
                                        <div class="box-tools pull-right">
                                            <div class="btn-group">
                                                <div class="btn-group">
                                                    <button class="btn btn-success btn-sm switch-box to-prev-box" data-to-box="#B30"><i class="fa fa-angle-left"></i></button>
                                                    <button type="button" class="btn btn-success btn-sm box-num dropdown-toggle" data-toggle="dropdown">#B1</button>
                                                    <button class="btn btn-success btn-sm switch-box to-next-box" data-to-box="#B2"><i class="fa fa-angle-right"></i></button>
                                                    <ul class="dropdown-menu box-list" style="max-height: 300px; overflow-y: scroll;">
                                                        <?php for ($bl=1; $bl < 31; $bl++): ?>
                                                            <li><a href="#B<?php echo $bl ?>">Box <?php echo $bl ?></a></li>
                                                        <?php endfor ?>
                                                    </ul>
                                                </div>
                                            </div>
                                            <button class="btn btn-success btn-sm" id="cim">Import</button>
                                            <button class="btn btn-danger btn-sm" id="cld">Clear Data</button>
                                        </div>
                                    </div>
                                    <div class="box-body">
                                    <?php for ($b=1; $b < 31; $b++): ?>
                                        <table class="table poke-box" <?php if ($b >= 2) echo 'style="display: none"' ?> id="B<?php echo $b ?>">
                                            <tbody>
                                            <?php for ($r=1; $r < 6; $r++): ?>
                                                <tr>
                                                <?php for ($c=1; $c < 7; $c++): ?>
                                                    <td id="<?php echo $r."-".$c ?>" style="text-align: center;"><button id="" class="btn btn-default show-info" data-container="body" data-toggle="popover" data-placement="right" data-content="Empty slot"><img src="public/images/favicon.ico" alt=""></button></td>
                                                <?php endfor ?>
                                                </tr>
                                            <?php endfor ?>
                                            </tbody>
                                        </table>
                                    <?php endfor ?>
                                    </div><!-- /.box-body -->
                                </div><!-- /.box -->
                            </div><!-- /.col -->
                        </div>
                    </div>

                    </div><!-- /.tab-pane -->
                    <div class="tab-pane" id="predict">
                        
                    </div><!-- /.tab-pane -->
                </div><!-- /.tab-content -->
            </div><!-- nav-tabs-custom -->
	    </div><!-- /.col -->	</div>
	<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="import-modal">
		<div class="modal-dialog modal-md">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="pull-right btn btn-xs btn-danger" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
					<h4 class="modal-title" id="notice-title">Raw Data</h4>
				</div>
				<div class="modal-body" id="">
                    <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
				</div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-success" id="impd">Submit</button>
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i>
                    Close</button>
                </div>
			</div>
		</div>
	</div>
    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="faqs-modal">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="pull-right btn btn-xs btn-danger" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
                    <h4 class="modal-title" id="">How to use</h4>
                </div>
                <div class="modal-body" id="">
                    <p>
                        - Get you boxes data from <b class="text-red">MassDumper</b>, using <b class="text-red">Reddit's format</b>. <br>
                        - Click <button class="btn btn-success btn-sm">Import</button> and a modal will appear, paste the data into the textarea. <br>
                        - Your data should be something like this:
                        <pre>
| Box | Slot | Name | Nature | Ability | Spread | SV
|:--|:--|:--|:--|:--|:--|:--
| B2 | 1,1 | Tyrunt (M) | Adamant | Strong Jaw | 31.31.31.04.31.31 | 1164 |
| B2 | 1,2 | Tyrunt (F) | Adamant | Strong Jaw | 31.31.31.31.29.31 | 0246 |
| B2 | 1,3 | Tyrunt (M) | Adamant | Strong Jaw | 31.29.31.31.31.31 | 2815 |

.
.
.
| B27 | 5,2 | Heracross (M) | Adamant | Moxie | 31.31.31.22.31.04 | 1891 |
| B27 | 5,3 | Heracross (M) | Adamant | Moxie | 31.31.01.22.31.31 | 3172 |
| B27 | 5,4 | Heracross (M) | Adamant | Moxie | 31.31.31.22.06.31 | 0503 |
| B27 | 5,5 | Heracross (F) | Adamant | Swarm | 31.31.04.22.31.31 | 3160 |
                        </pre>
                        Or just this:
                        <pre>
| B2 | 1,1 | Tyrunt (M) | Adamant | Strong Jaw | 31.31.31.04.31.31 | 1164 |
| B2 | 1,2 | Tyrunt (F) | Adamant | Strong Jaw | 31.31.31.31.29.31 | 0246 |
| B2 | 1,3 | Tyrunt (M) | Adamant | Strong Jaw | 31.29.31.31.31.31 | 2815 |
| B2 | 1,4 | Heracross (M) | Adamant | Swarm | 31.31.31.31.31.31 | 2864 |
| B2 | 1,6 | Kangaskhan (F) | Jolly | Scrappy | 31.31.31.09.31.31 | 1468 |
| B2 | 2,1 | Eevee (M) | Calm | Adaptability | 31.13.29.31.31.31 | 3914 |
| B2 | 2,2 | Kangaskhan (F) | Jolly | Scrappy | 31.31.31.31.31.31 | 0898 |
| B2 | 2,4 | Honedge (M) | Quiet | No Guard | 31.31.31.31.31.28 | 0202 |
| B2 | 2,6 | Honedge (M) | Quiet | No Guard | 31.31.31.31.31.28 | 3377 |
| B2 | 3,4 | Kangaskhan (F) | Jolly | Scrappy | 31.31.31.15.31.31 | 3196 |
| B2 | 4,2 | Heracross (M) | Adamant | Moxie | 31.31.31.00.31.31 | 4040 |
| B2 | 4,3 | Heracross (M) | Adamant | Moxie | 31.31.31.22.31.31 | 0717 |
| B2 | 4,5 | Heracross (M) | Adamant | Moxie | 31.31.31.00.31.31 | 0823 |
| B3 | 1,1 | Tyrunt (M) | Adamant | Strong Jaw | 30.31.09.31.31.31 | 2819 |
| B3 | 1,2 | Tyrunt (M) | Adamant | Strong Jaw | 07.31.31.31.31.31 | 4089 |
                        </pre>
                        - Click <button class="btn btn-sm btn-success">Submit</button>, your boxes are ready to view. <br>
                        - If you think you get stuck or some thing. Click  <button class="btn btn-danger btn-sm" id="">Clear Data</button> then start over. <br>
                        - I will try to add more format supporting as soon as I have time.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i>
                    Close</button>
                </div>
            </div>
        </div>
    </div>
</section>
</aside>

</div>
<!-- jQuery 2.0.2 -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<!-- jQuery UI 1.10.3 -->
<script src="public/js/jquery-ui-1.10.3.min.js" type="text/javascript"></script>
<!-- Bootstrap -->
<script src="public/js/bootstrap.min.js" type="text/javascript"></script>\
<!-- AdminLTE App -->
<script src="public/js/AdminLTE/app.js" type="text/javascript"></script>

<!-- exclusive scripts -->
<script src="public/js/xytools.js"></script>
</body>
</html>