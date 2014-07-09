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
        <!-- <div class="breadcrumb clearfix">
          <ul>
            <li><a href=""><i class="fa fa-home"></i></a></li>
            <li class="active">X/Y tools</li>
          </ul>
        </div> -->
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
                    <div class="col-md-5 col-md-offset-2">
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
                              <button class="btn btn-success" id="ccm"><i class="entypo-erase"></i></button>
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
                                            <button id="" class="btn btn-default show-info" data-container="body" data-toggle="popover" data-content="---------" data-original-title="Empty slot"><img src="public/images/favicon.ico" alt=""></button>
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
                    <div class="col-md-3">
                      <input type="text" class="form-control" id="search-input" placeholder="Search by species">
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

<div class="modal fade" id="import-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="notice-title">Raw Data</h4>
        </div>
      <div class="modal-body">
        <div class="inline-group">
          <label class="radio-inline"><input type="radio" name="format" id="csv" checked><b>CSV</b></label>
          <label class="radio-inline"><input type="radio" name="format" id="reddit" ><b>Reddit</b></label>
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
<div class="modal fade" id="approve-modal">
  <div class="modal-dialog modal-sm" id="">
    <div class="modal-content">
      <div class="modal-header">
        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
        <h4 class="modal-title">Clear all boxes's data</h4>
      </div>
      <div class="modal-body">
        <p>Are you sure?</p>
      </div>
      <div class="modal-footer">
        <button id="" data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
        <button id="cld" class="btn btn-danger" type="button">OK</button>
      </div>
    </div>
    <!-- /.modal-content --> 
  </div>
</div>
<!-- /.modal --> 
<div class="modal fade" id="pkm-detail-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><b>&times;</b></button>
        <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> -->
        <h4 class="modal-title" id=""></h4>
        </div>
      <div class="modal-body">
          <div class="row">
            <div class="col-sm-7">
              <table class="table condensed-table">
                <tr><td colspan="" class="detail shiny">-</td><td colspan="3" class="detail egg">-</td></tr>
                <tr><td>Nickname</td><th class="detail nname">-</th><td>ESV</td><th><span class="text-red detail esv"></span></th></tr>
                <tr><td>Species</td><th colspan="" class="detail species">-</th><th colspan=""><b class="detail gender"></b></th><th class="pkball"></th></tr>
                <tr><td>Ability</td><th colspan="3" class="detail ability">-</th></tr>
                <tr><td>Nature</td><th colspan="3" class="detail nature">-</th></tr>
                <tr><td>OT</td><th colspan="3" class="detail ot">-</th></tr>
                <tr><td>TID</td><th class="detail tid">-</th><td>SID</td><th class="detail sid">-</th></tr>
              </table>
            </div>
            <div class="col-sm-5">
              <table class="table condensed-table">
                <tr><td></td><td><span class="label label-primary">IV</span></td><td><span class="label label-success">EV</span></td></tr>
                <tr><td class="text-green">HP</td><th class="detail hp_iv">-</th><th class="detail hp_ev">-</th></tr>
                <tr><td class="text-yellow">Attack</td><th class="detail atk_iv">-</th><th class="detail atk_ev">-</th></tr>
                <tr><td class="text-orange">Defense</td><th class="detail def_iv">-</th><th class="detail def_ev">-</th></tr>
                <tr><td class="text-marine">Sp. Attack</td><th class="detail satk_iv">-</th><th class="detail satk_ev">-</th></tr>
                <tr><td class="text-blue">Sp. Defense</td><th class="detail sdef_iv">-</th><th class="detail sdef_ev">-</th></tr>
                <tr><td class="text-purple">Speed</td><th class="detail spd_iv">-</th><th class="detail spd_ev">-</th></tr>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-5 image" style="text-align: center; padding: 15px 0px;">
              <!-- <div data-widget-editbutton="false" id="" class="powerwidget powerwidget-as-portlet image"role="widget" style=""></div> -->
            </div>
            <div class="col-sm-7">
              <table class="table table-condensed">
                <tr><th>Moves</th><th>Inherited Moves</th></tr>
                <tr><td class="col-sm-6 detail move1">-</td><td class="col-sm-6 detail i_m1">-</td></tr>
                <tr><td class="col-sm-6 detail move2">-</td><td class="col-sm-6 detail i_m2">-</td></tr>
                <tr><td class="col-sm-6 detail move3">-</td><td class="col-sm-6 detail i_m3">-</td></tr>
                <tr><td class="col-sm-6 detail move4">-</td><td class="col-sm-6 detail i_m4">-</td></tr>
              </table>
            </div>
          </div>
      </div>
    </div>
    <!-- /.modal-content --> 
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal --> 
<div class="modal fade" id="faqs-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="notice-title">How to use?</h4>
        </div>
      <div class="modal-body">
          <p>
            - Get you boxes data from <b class="text-red">KeySAV2</b>, using <b class="text-red">Reddit's format</b> or <b class="text-red">CSV format</b>.<br>
            - Click <button class="btn btn-success btn-sm"><i class="entypo-publish"></i></button> and a modal will appear, paste data into textarea. <br>
            - Your <b class="text-red">Reddit</b> data should be something like this:
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
    <b class="text-red">CSV format</b> should be like this:
    <pre>
Box,Row,Column,Species,Gender,Nature,Ability,HP IV,ATK IV,DEF IV,SPA IV,SPD IV,SPE IV,HP Type,ESV,TSV,Nickname,OT,Ball,TID,SID,HP EV,ATK EV,DEF EV,SPA EV,SPD EV,SPE EV,Move 1,Move 2,Move 3,Move 4,Relearn 1, Relearn 2, Relearn 3, Relearn 4, Shiny, Egg
B02,1,1,Croagunk,♀,Adamant,Dry Skin,31,31,29,31,21,31,Dark,,1231,Croagunk,Braviary,Poké Ball,54341,39100,0,0,0,0,0,0,Astonish,(None),(None),(None),Astonish,(None),(None),(None),,
B02,1,2,Croagunk,♂,Adamant,Dry Skin,31,31,31,31,25,31,Dark,,1231,Croagunk,Braviary,Poké Ball,54341,39100,0,0,0,0,0,0,Astonish,(None),(None),(None),Astonish,(None),(None),(None),,
B02,1,3,Croagunk,♀,Adamant,Anticipation,31,1,31,31,31,31,Dark,,1231,Croagunk,Braviary,Poké Ball,54341,39100,0,0,0,0,0,0,Astonish,(None),(None),(None),Astonish,(None),(None),(None),,
.
.
.
B31,1,4,Ditto,-,Quiet,Limber,31,31,31,31,31,0,Ice,,2268,Snowflake,ズキ,Dive Ball,34497,02830,252,51,51,51,51,51,Transform,(None),(None),(None),(None),(None),(None),(None),★,
B31,1,5,Ditto,-,Adamant,Limber,31,31,31,31,31,31,Dark,,2268,メタモン,ズキ,Heavy Ball,34497,02830,252,51,51,51,51,51,Transform,(None),(None),(None),(None),(None),(None),(None),★,
B31,1,6,Ditto,-,Timid,Limber,31,31,31,31,31,31,Dark,,2268,Destiny,ズキ,Heavy Ball,34497,02830,252,51,51,51,51,51,Transform,(None),(None),(None),(None),(None),(None),(None),★,
B31,2,1,Ditto,-,Brave,Limber,31,31,31,31,31,0,Ice,,2268,Trick,ズキ,Quick Ball,34497,02830,252,51,51,51,51,51,Transform,(None),(None),(None),(None),(None),(None),(None),★,
B31,3,1,Ditto,-,Modest,Limber,31,31,31,31,31,31,Dark,,2268,Babymaker,ズキ,Heavy Ball,34497,02830,252,51,51,51,51,51,Transform,(None),(None),(None),(None),(None),(None),(None),★,
            </pre>
            - Click <button class="btn btn-sm btn-success">Submit</button>, your boxes are ready to view. <br>
            - If you think you get stuck or some thing. Click  <button class="btn btn-danger btn-sm" id=""><i class="entypo-erase"></i></button> then confirm to start over. <br>
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

<!-- Main scripts -->
<script src="public/js/xytools.js"></script>

<!--/Scripts-->

</body>
</html>

