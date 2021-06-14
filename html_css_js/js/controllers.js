var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'Pierwsze zdjęcie.',
        'when':'Listopad 2016',
        'thumbnailUrl':'img/10.jpg'
        },
        { 'title':'Drugie zdjęcie.',
        'when':'Grudzień 2013',
        'thumbnailUrl':'img/12.jpg'
        },
        { 'title':'Trzecie zdjęcie.',
        'when':'Marzec 2018',
        'thumbnailUrl':'img/11.jpg'
        },
        { 'title':'Czwarte zdjęcie.',
        'when':'Luty 2017',
        'thumbnailUrl':'img/13.jpg'
        },
        { 'title':'Piąte zdjęcie.',
        'when':'Kwiecień 2015',
        'thumbnailUrl':'img/14.jpg'
        },
        { 'title':'Szóste zdjęcie.',
        'when':'Grudzień 2014',
        'thumbnailUrl':'img/15.jpg'
        }
    ];

    $scope.sortList = 
    [
        {
            'label':'Alfabetycznie',
            'value':'title'
        },
        {
            'label':'Chronologicznie',
            'value':'when'
        },
        {
            'label':'Od Najnowszych',
            'value':'-when'
        },
    ];
    
});