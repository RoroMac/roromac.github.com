(function(){
    "use strict";
    const color = '#FFFFFF';
    const maxParticles = 100;

    particlesJS('particles-js', {
    'particles': {
        'number': {
        'value': maxParticles,
        'density': {
            'enable': true,
            'value_area': (maxParticles * 10)
        }
        },
        'color': {
        'value': color
        },
        'shape': {
        'type': 'circle',
        'stroke': {
            'width': 0,
            'color': '#000000'
        },
        'polygon': {
            'nb_sides': 0
        },
        },
        'opacity': {
        'value': 0.5,
        'random': true,
        'anim': {
            'enable': true,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
        }
        },
        'size': {
        'value': 3,
        'random': true,
        'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
        }
        },
        'line_linked': {
        'enable': false,
        'distance': 150,
        'color': color,
        'opacity': 1,
        'width': 1
        },
        'move': {
        'enable': true,
        'speed': 0.8,
        'direction': 'none',
        'random': false,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
            'enable': true,
            'rotateX': 600,
            'rotateY': 1200
        }
        }
    },
    'interactivity': {
        'detect_on': 'window', //control if on or below javascript element
        'events': {
        'onhover': {
            'enable': true,
            'mode': 'grab'
        },
        'onclick': {
            'enable': false,
            'mode': 'bubble'
        },
        'resize': true
        },
        'modes': {
        'grab': {
            'distance': 140,
            'line_linked': {
            'opacity': 0.1
            }
        },
        'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
        },
        'repulse': {
            'distance': 200,
            'duration': 0.4
        },
        'push': {
            'particles_nb': 4
        },
        'remove': {
            'particles_nb': 2
        }
        }
    },
    'retina_detect': true
    });
}());