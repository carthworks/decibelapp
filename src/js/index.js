import 'bootstrap';
import 'datatables.net';
import 'datatables.net-fixedheader-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-select-bs4';

import '../scss/index.scss';

// var $ = require( 'jquery' );
// require( 'datatables.net' )( window, $ );

$('#alert').click(() => {
  alert('jQuery works!');
});

$('.dropdown-submenu > a').on('click', function(e) {
  var submenu = $(this);
  $('.dropdown-submenu .dropdown-menu').removeClass('show');
  submenu.next('.dropdown-menu').addClass('show');
  e.stopPropagation();
});

$('.dropdown').on('hidden.bs.dropdown', function() {
  // hide any open menus when parent closes
  $('.dropdown-menu.show').removeClass('show');
});

// Your jQuery code

$(document).ready(function() {
  // $('#poll-list-table').DataTable();

  var dataSet = [
    [
      'Survey 01',
      'Active',
      'Singapore',
      '2010/11/23',
      '2010/11/14',
      '2010/11/5',
      'copy',
    ],
    [
      'Survey',
      'Pending Approval',
      'San Francisco',
      '1314',
      '2011/06/07',
      '2010/11/5',
      'edit',
    ],
    [
      'Survey',
      'Rejected',
      'San Francisco',
      '2947',
      '2010/03/11',
      '2010/11/5',
      'copy',
    ],
    [
      'Survey Itou',
      'Approved',
      'Tokyo',
      '2010/11/5',
      '2011/08/14',
      '2010/11/5',
      'copy',
    ],
    [
      'Survey House',
      'Pending Approval',
      'Sidney',
      '2010/11/5',
      '2011/06/02',
      '2010/11/5',
      'copy',
    ],
    [
      'Survey Burks',
      'Developer',
      'London',
      '2010/11/5',
      '2009/10/22',
      '2010/11/50',
      'copy',
    ],
    [
      'Survey Bartlett',
      'Rejected ',
      'London',
      '2010/11/5',
      '2011/05/07',
      '2010/11/5',
      'copy',
    ],
    [
      'Survey Cortez',
      'Approved',
      'San Francisco',
      '2010/11/5',
      '2008/10/26',
      '2010/11/5',
      'copy',
    ],
    [
      'Survey Mccray',
      'Approved',
      'Edinburgh',
      '2010/11/50',
      '2011/03/09',
      '2010/11/2',
      'copy',
    ],
    [
      'Survey Butler',
      'Approved',
      'San Francisco',
      '2010/11/54',
      '2009/12/09',
      '2010/11/5',
      'copy',
    ],
  ];

  $(document).ready(function() {
    $('#poll-list-table').DataTable({
      data: dataSet,
      responsive: true,
      columns: [
        { title: 'Survey Name' },
        {
          title: 'Status',
          className: 'surveyStatus',
          render: function(data) {
            var CClass;
            if (data == 'Active') {
              CClass = 'text-warning';
            } else if (data == 'Pending Approval') {
              CClass = 'text-primary';
            } else if (data == 'Approved') {
              CClass = 'text-success';
            } else if (data == 'Rejected') {
              CClass = 'text-danger';
            }

            return '<span class="' + CClass + '">' + data + '</span>';
          },
        },
        { title: 'Region' },
        { title: 'Start date.' },
        { title: 'End date' },
        { title: 'Created' },
        {
          title: 'Action',
          className: 'surveyStatus',
          render: function(data) {
            return '<span class=className><a href="#">' + data + '</a></span>';
          },
        },
      ],
    });

    // $('#poll-list-table tbody').on('mouseenter', 'td', function() {
    //   var colIdx = table.cell(this).index().column;

    //   $(table.cells().nodes()).removeClass('highlight');
    //   $(table.column(colIdx).nodes()).addClass('highlight');
    // });
  });
});

$('a[href$="#Modal"]').on('click', function() {
  $('#Modal').modal('show');
});

$('#createSurvey').on('click', function($event) {
  console.log($event);
  alert('create Survey');
});
