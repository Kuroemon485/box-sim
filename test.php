<!DOCTYPE html>

<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="keywords" content="admin template, admin dashboard, inbox templte, calendar template, form validation">
<meta name="author" content="DazeinCreative">
<meta name="description" content="ORB - Powerfull and Massive Admin Dashboard Template with tonns of useful features">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ORB | Components</title>
<link href="public/css/styles.css" rel="stylesheet" type="text/css">

<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
<script type="text/javascript" src="public/js/vendors/modernizr/modernizr.custom.js"></script>
</head>

<body>

<!--Smooth Scroll-->
<div class="smooth-overflow">
<!--Navigation-->
    <nav class="main-header clearfix" role="navigation"> <a class="navbar-brand" href="index.html"><span class="text-blue">ORB</span></a> 
      
     
      <!--Navigation Itself-->
      
      <div class="navbar-content"> 
        
        <!--Sidebar Toggler--> 
        <a href="#" class="btn btn-default left-toggler"><i class="fa fa-bars"></i></a> 
      </div>
    </nav>
    
    <!--/Navigation--> 
    
    <!--MainWrapper-->
    <div class="main-wrap"> 
      
      <!--Main Menu-->
      <div class="responsive-admin-menu">
        <div class="responsive-menu">ORB
          <div class="menuicon"><i class="fa fa-angle-down"></i></div>
        </div>
        <ul id="menu">
          <li><a href="index.html" title="Dashboard"><i class="entypo-briefcase"></i><span> Dashboard</span></a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!--/MainMenu--> 
      
      <!--Content Wrapper-->
      <div class="content-wrapper"><!--Horisontal Dropdown-->
        <!--Breadcrumb-->
        <div class="breadcrumb clearfix">
          <ul>
            <li><a href="index.html"><i class="fa fa-home"></i></a></li>
            <li><a href="index.html">Dashboard</a></li>
            <li class="active">Data</li>
          </ul>
        </div>
        <!--/Breadcrumb-->
        
        <div class="page-header">
          <h1>Components</h1>
        </div>
        
        <!-- Widget Row Start grid -->
        <div class="row" id="">
          <div class="col-md-12 bootstrap-grid"> 
            <!-- tabs left -->
            <div class="tabbable tabs-left tabs-grey">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#one-left" data-toggle="tab">One <span class="label label-default">Primary</span></a></li>
                <li><a href="#two-left" data-toggle="tab">Two <span class="label label-danger">Danger</span></a></li>
                <li><a href="#three-left" data-toggle="tab">Three <span class="label label-success">Yeah!</span></a></li>
              </ul>
              <div class="tab-content">
                <!--Panel-->
                
                <div class="tab-pane active" id="one-left">
                  <div class="row">
                    <div class="col-sm-8 col-sm-offset-2">
                      <div class="panel panel-primary">
                        <div class="panel-heading">
                          <div class="panel-title pull-left box-title">Box 1</div>
                          <div class="pull-right">
                            <div class="btn-group">
                              <button class="btn btn-sm btn-success switch-box to-prev-box" data-to-box="#B30"><i class="fa fa-angle-left"></i></button>
                              <div class="btn-group">

                                  <button type="button" class="btn btn-sm btn-success box-num dropdown-toggle" data-toggle="dropdown">#B1</button>
                                  <ul class="dropdown-menu box-list" style="max-height: 300px; overflow-y: scroll;">
                                      <?php for ($bl=1; $bl < 31; $bl++): ?>
                                          <li><a href="#B<?php echo $bl ?>">Box <?php echo $bl ?></a></li>
                                      <?php endfor ?>
                                  </ul>
                              </div>
                              <button class="btn btn-sm btn-success switch-box to-next-box" data-to-box="#B2"><i class="fa fa-angle-right"></i></button>
                            </div>
                            <button class="btn btn-sm btn-success" id="cim">Import</button>
                            <button class="btn btn-sm btn-danger" id="cld">Clear Data</button>
                            <button class="btn btn-sm btn-success" id="cfm"><i class="fa fa-question"></i></button>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div> <!-- Panel -->
                <div class="tab-pane" id="two-left"></div>
                <div class="tab-pane" id="three-left"></div>
              </div>
            </div>
            <!-- /tabs --> 
          </div>
        </div>
          
          <!-- /Inner Row Col-md-12 --> 
        </div>
        <!-- /Widgets Row End Grid--> 
      </div>
      <!-- / Content Wrapper --> 
    </div>
    <!--/MainWrapper--> 
  </div>
<!--/Smooth Scroll--> 
<!--Modals--> 

<div class="modal" id="import-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="notice-title">Raw Data</h4>
        </div>
      <div class="modal-body">
          <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
      </div>
      <div class="modal-footer">
        <button class="btn btn-sm btn-success" id="impd">Submit</button>
        <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" aria-hidden="true">&times; Close</button>
      </div>
    </div>
    <!-- /.modal-content --> 
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal --> 
<div class="modal" id="faqs-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="notice-title">How to use?</h4>
        </div>
      <div class="modal-body">
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
        <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" aria-hidden="true">&times; Close</button>
      </div>
    </div>
    <!-- /.modal-content --> 
  </div>
  <!-- /.modal-dialog --> 
</div>

<!--Scripts--> 
<!--JQuery--> 
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> 
<script type="text/javascript" src="public/js/vendors/jquery/jquery.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/jquery/jquery-ui.min.js"></script> 

<!--EasyPieChart--> 
<script type="text/javascript" src="public/js/vendors/easing/jquery.easing.1.3.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/easypie/jquery.easypiechart.min.js"></script> 

<!--Fullscreen--> 
<script type="text/javascript" src="public/js/vendors/fullscreen/screenfull.min.js"></script> 

<!--Forms--> 
<script type="text/javascript" src="public/js/vendors/forms/jquery.form.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/forms/jquery.validate.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/forms/jquery.maskedinput.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/jquery-steps/jquery.steps.min.js"></script> 

<!--NanoScroller--> 
<script type="text/javascript" src="public/js/vendors/nanoscroller/jquery.nanoscroller.min.js"></script> 

<!--Sparkline--> 
<script type="text/javascript" src="public/js/vendors/sparkline/jquery.sparkline.min.js"></script> 

<!--Horizontal Dropdown--> 
<script type="text/javascript" src="public/js/vendors/horisontal/cbpHorizontalSlideOutMenu.js"></script> 
<script type="text/javascript" src="public/js/vendors/classie/classie.js"></script> 

<!--Datatables--> 
<script type="text/javascript" src="public/js/vendors/datatables/jquery.dataTables.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/datatables/jquery.dataTables-bootstrap.js"></script> 
<script type="text/javascript" src="public/js/vendors/datatables/dataTables.colVis.js"></script> 
<script type="text/javascript" src="public/js/vendors/datatables/colvis.extras.js"></script> 

<!--PowerWidgets--> 
<script type="text/javascript" src="public/js/vendors/powerwidgets/powerwidgets.min.js"></script> 

<!--Summernote--> 
<script type="text/javascript" src="public/js/vendors/summernote/summernote.min.js"></script> <!--Morris Chart--> 
<script type="text/javascript" src="public/js/vendors/raphael/raphael-min.js"></script> 
<script type="text/javascript" src="public/js/vendors/morris/morris.min.js"></script> 

<!--FlotChart--> 
<script type="text/javascript" src="public/js/vendors/flotchart/jquery.flot.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/flotchart/jquery.flot.stack.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/flotchart/jquery.flot.categories.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/flotchart/jquery.flot.time.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/flotchart/jquery.flot.resize.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/flotchart/jquery.flot.axislabels.js"></script> 
<script type="text/javascript" src="public/js/vendors/flotchart/jquery.flot-tooltip.js"></script> 
<script type="text/javascript" src="public/js/vendors/flotchart/jquery.flot.pie.min.js"></script> 

<!--Calendar--> 
<script type="text/javascript" src="public/js/vendors/fullcalendar/fullcalendar.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/fullcalendar/gcal.js"></script> 

<!--Bootstrap--> 
<script type="text/javascript" src="public/js/vendors/bootstrap/bootstrap.min.js"></script> 

<!--Bootstrap Progress Bar--> 
<script type="text/javascript" src="public/js/vendors/bootstrap-progress-bar/bootstrap-progressbar.min.js"></script> 

<!--iOnRangeSlider--> 
<script type="text/javascript" src="public/js/vendors/ionrangeslider/ion.rangeSlider.min.js"></script> 

<!--Vector Map--> 
<script type="text/javascript" src="public/js/vendors/vector-map/jquery.vmap.min.js"></script> 
<script type="text/javascript" src="public/js/vendors/vector-map/jquery.vmap.sampledata.js"></script> 
<script type="text/javascript" src="public/js/vendors/vector-map/jquery.vmap.world.js"></script> 
<script type="text/javascript" src="public/js/vendors/vector-map/jquery.vmap.usa.js"></script> 
<script type="text/javascript" src="public/js/vendors/vector-map/jquery.vmap.europe.js"></script> 
<script type="text/javascript" src="public/js/vendors/vector-map/jquery.vmap.russia.js"></script> 

<!--ToDo--> 
<script type="text/javascript" src="public/js/vendors/todos/todos.js"></script> 

<!--Nestable--> 
<script type="text/javascript" src="public/js/vendors/nestable-lists/jquery.nestable.js"></script> 

<!--FitVids--> 
<script type="text/javascript" src="public/js/vendors/fitvids/jquery.fitvids.js"></script> 

<!--Main App--> 
<script type="text/javascript" src="public/js/scripts.js"></script>



<!--/Scripts-->

</body>
</html>