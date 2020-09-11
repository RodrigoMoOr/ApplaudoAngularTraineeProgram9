import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  AnimationQueryMetadata,
  AnimationGroupMetadata,
} from '@angular/animations';

export const slider = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);

function slideTo(
  direction
): (AnimationQueryMetadata | AnimationGroupMetadata)[] {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('2000ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('2000ms ease', style({ [direction]: '0%' }))]),
    ]),

    query(':leave', animateChild()),
    query(':enter', animateChild()),
  ];
}