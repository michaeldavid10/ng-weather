import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

export const loadingAnimation = trigger('loading',[
    transition('* => *',[
      query(':leave',[
        stagger(100,[
          animate('350ms',style({opacity: 0}))
        ])
      ],{optional: true}),
      query(':enter',[
        style({opacity: 0}),
        stagger(100,[
          animate('350ms',style({opacity: 1}))
        ])
      ],{optional: true})
    ])
  ]);
