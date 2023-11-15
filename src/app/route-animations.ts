import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
} from '@angular/animations';

// slide to right or left depending on which page you're on.
export const slider =
    trigger('routeAnimations', [
        transition('* => isLeft', slideTo('left')),
        transition('* => isRight', slideTo('right')),
        transition('isRight => *', slideTo('left')),
        transition('isLeft => *', slideTo('right'))
    ]);

    type Direction = 'left' | 'right' | 'top' | 'bottom';    
function slideTo(direction: Direction) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%'})
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%'}))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%'}))
            ])
        ]),
    ];
}