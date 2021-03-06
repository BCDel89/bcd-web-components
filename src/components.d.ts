/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BcdRating {
        /**
          * The max rating
         */
        "max": number;
        /**
          * The rating
         */
        "rating": number;
    }
    interface BcdRatingCircle {
        /**
          * show as percentage
         */
        "fraction": boolean;
        /**
          * The max rating
         */
        "max": number;
        /**
          * The rating
         */
        "rating": number;
        /**
          * The rating
         */
        "size": string;
    }
}
declare global {
    interface HTMLBcdRatingElement extends Components.BcdRating, HTMLStencilElement {
    }
    var HTMLBcdRatingElement: {
        prototype: HTMLBcdRatingElement;
        new (): HTMLBcdRatingElement;
    };
    interface HTMLBcdRatingCircleElement extends Components.BcdRatingCircle, HTMLStencilElement {
    }
    var HTMLBcdRatingCircleElement: {
        prototype: HTMLBcdRatingCircleElement;
        new (): HTMLBcdRatingCircleElement;
    };
    interface HTMLElementTagNameMap {
        "bcd-rating": HTMLBcdRatingElement;
        "bcd-rating-circle": HTMLBcdRatingCircleElement;
    }
}
declare namespace LocalJSX {
    interface BcdRating {
        /**
          * The max rating
         */
        "max"?: number;
        /**
          * The rating
         */
        "rating"?: number;
    }
    interface BcdRatingCircle {
        /**
          * show as percentage
         */
        "fraction"?: boolean;
        /**
          * The max rating
         */
        "max"?: number;
        /**
          * The rating
         */
        "rating"?: number;
        /**
          * The rating
         */
        "size"?: string;
    }
    interface IntrinsicElements {
        "bcd-rating": BcdRating;
        "bcd-rating-circle": BcdRatingCircle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bcd-rating": LocalJSX.BcdRating & JSXBase.HTMLAttributes<HTMLBcdRatingElement>;
            "bcd-rating-circle": LocalJSX.BcdRatingCircle & JSXBase.HTMLAttributes<HTMLBcdRatingCircleElement>;
        }
    }
}
