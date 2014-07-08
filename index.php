<!DOCTYPE html>

<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta name="keywords" content="admin template, admin dashboard, inbox templte, calendar template, form validation">
<meta name="author" content="DazeinCreative">
<meta name="description" content="ORB - Powerfull and Massive Admin Dashboard Template with tonns of useful features">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Box Simulator | Pokemon X/Y</title>
<link href="public/css/styles.css" rel="stylesheet" type="text/css">

<link rel="shortcut icon" type="image/x-icon" href="public/img/favicon.ico" />
<script type="text/javascript" src="public/js/vendors/modernizr/modernizr.custom.js"></script>
</head>

<body>

<!--Smooth Scroll-->
<div class="smooth-overflow">
<!--Navigation-->
    <nav class="main-header clearfix" role="navigation"> <a class="navbar-brand" href=""><span class="text-blue">CDB</span></a> 
      <!--Navigation Itself-->
      <div class="navbar-content"> 
        <!--Sidebar Toggler--> 
        <button class="btn btn-default left-toggler pull-right"><i class="fa fa-bars"></i></button> 
      </div>
    </nav>
    <!--/Navigation--> 
    
    <!--MainWrapper-->
    <div class="main-wrap"> 
      
      <!--Main Menu-->
      <!-- <div class="responsive-admin-menu">
        <ul id="menu">
          <li><a href="" title="Dashboard"><i class="fa fa-wrench"></i><span> Tools</span></a></li>
            </ul>
          </li>
        </ul>
      </div> -->
      <!--/MainMenu--> 
      
      <!--Content Wrapper-->
      <div class="content-wrapper"><!--Horisontal Dropdown-->
        <!--Breadcrumb-->
        <div class="breadcrumb clearfix">
          <ul>
            <li><a href="http://competitiondb.io"><i class="fa fa-home"></i></a></li>
            <li class="active">X/Y tools</li>
          </ul>
        </div>
        <!--/Breadcrumb-->
        
        <!-- Widget Row Start grid -->
        <div class="row" id="">
          <div class="col-md-12 bootstrap-grid"> 
            <!-- tabs left -->
            <div class="tabs-grey">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#boxsim" data-toggle="tab"><i class="fa fa-inbox"></i> Box Simulator</a></li>
                <li><a href="#boxsim" data-toggle="tab">Coming soon...</a></li>
              </ul>
              <div class="tab-content">
                <!--Panel-->
                
                <div class="tab-pane active" id="boxsim">
                  <div class="row">
                    <div class="col-sm-6 col-sm-offset-3">
                      <div class="panel panel-primary">
                        <div class="panel-heading">
                          <div class="panel-title pull-left"><h4 class="box-title">Box 1</h4></div>
                          <div class="pull-right">
                            <div class="btn-group">
                              <button class="btn btn-success switch-box to-prev-box" data-to-box="31"><i class="fa fa-angle-left"></i></button>
                              <div class="btn-group">
                                  <button type="button" class="btn btn-success box-num dropdown-toggle" data-toggle="dropdown">1</button>
                                  <ul class="dropdown-menu box-list" style="max-height: 300px; overflow-y: scroll;">
                                      <?php for ($bl=1; $bl <= 31; $bl++): ?>
                                          <li><a href="#B<?php echo $bl ?>">Box <?php echo $bl ?></a></li>
                                      <?php endfor ?>
                                  </ul>
                              </div>
                              <button class="btn btn-success switch-box to-next-box" data-to-box="2"><i class="fa fa-angle-right"></i></button>
                            </div>
                            <div class="btn-group">
                              <button class="btn btn-success" id="cim"><i class=" entypo-publish "></i></button>
                              <button class="btn btn-success" id="cld"><i class="entypo-erase"></i></button>
                              <button class="btn btn-success" id="cfm"><i class="entypo-help"></i></button>
                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                          <?php #for ($b=1; $b <= 31; $b++): ?>
                              <table class="table poke-box" data-box-num="1">
                                  <tbody>
                                  <?php for ($r=1; $r < 6; $r++): ?>
                                      <tr>
                                      <?php for ($c=1; $c < 7; $c++): ?>
                                          <td id="<?php echo $r."-".$c ?>" style="text-align: center;">
                                            <button id="" class="btn btn-default show-info" data-container="body" data-toggle="popover" data-placement="right" data-content="Empty slot"><img src="public/images/favicon.ico" alt=""></button>
                                          </td>
                                      <?php endfor ?>
                                      </tr>
                                  <?php endfor ?>
                                  </tbody>
                              </table>
                          <?php #endfor ?>
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
          <div class="inline-group">
            <label class="radio">
              <input type="radio" name="format" id="reddit" checked>
              <i></i>Reddit</label>
            <label class="radio">
              <input type="radio" name="format" id="csv">
              <i></i>CSV</label>
          </div>
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


<!--Bootstrap--> 
<script type="text/javascript" src="public/js/vendors/bootstrap/bootstrap.min.js"></script> 

<!--Bootstrap Progress Bar--> 
<script type="text/javascript" src="public/js/vendors/bootstrap-progress-bar/bootstrap-progressbar.min.js"></script> 

<script src="public/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>


<!-- exclusive scripts -->
<script src="public/js/xytools.js"></script>

<!--/Scripts-->

</body>
</html>

