'use strict';

/**
 * @ngdoc function
 * @name cctApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cctApp
 */
angular.module('cctApp')
  .controller('MainCtrl', function ($scope) {
    $scope.shows = [
    {
        name: 'The Piano Lesson',
        author: 'August Wilson',
        icon: 'images/piano.jpg',
        dates: 'October 15-29, 2015',
        director: 'Nada Vaughn',
        /* jshint multistr: true */
        summary: 'Set in 1936 Pittsburgh during the aftermath of the Great Depression, this Pulitzer Prize-winning \
        1990 play by American playwright August Wilson follows the lives of the Charles family and an heirloom, the \
        family piano. The play focuses on the tension between family members who treasure the piano as a link to \
        the family history, and those who want to sell the piano to improve the family\'s economic status. What The \
        Piano Lesson finally seems to ask is: "What do you do with your legacy, and how do you best put it to use?"',
        onsale: false
    },
    {
        name: 'The Women',
        author: 'Clare Boothe Luce',
        icon: 'images/women.jpg',
        dates: 'March 10-20, 2016',
        director: 'Vanessa Roman and Amy Ruprecht',
        summary: 'This witty comedy of manners follows a group of women through the perils of adultery, divorce and \
        finding a unique voice in a sea of gossip and innuendo. The 1936 play continues to echo a relevant look in \
        the complex nature of relationships.',
        onsale: true
    },
    {
        name: 'Inherit the Wind',
        author: 'Jerome Lawrence and Robert Edwin Lee',
        icon: 'images/inherit.jpg',
        dates: 'June 9-26, 2016',
        director: 'Mark Neels',
        summary: 'This play fictionalizes the 1925 Scopes "Monkey" Trial which resulted in John T. Scopes\'s conviction \
        for teaching Charles Darwin\'s theory of evolution to a high school science class, contrary to a Tennessee state \
        law. The theme of intellectual freedom explored in the play applies to many other ideological debates, such as \
        the McCarthy trials that were going on at the time it was written in 1955. According to the playwright, "We used \
        the teaching of evolution as a parable, a metaphor for any kind of mind control. It\'s not about science versus \
        religion. It\'s about the right to think."',
        onsale: true
    }	
    ];

    $scope.photos = [
    {
        src: 'images/photo1.png',
        caption: 'The Piano Lesson',
        visible: true
    },
    {
        src: 'images/photo2.jpg',
        caption: 'dont know what this picture is yet',
        visible: true
    },
    {
        src: 'images/photo3.jpg',
        caption: 'caption number 3',
        visible: true
    },
    {
        src: 'images/photo4.jpg',
        caption: 'little prince',
        visible: true
    }
    ];

  });
