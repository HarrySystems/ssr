import { Link as SkLink } from '@skatejs/sk-router';
import { component, h } from '../utils';

export const Hr = component(function hr() {
  return (
    <div class="hr">
      <style>{`
        .hr {
          letter-spacing: 10px;
          margin: 50px 0;
          text-align: center;
        }
      `}</style>
      &mdash;&mdash;&mdash;
    </div>
  );
});

export const Link = component(function link(css, href) {
  return (
    <SkLink.is css={this.context.style + css} href={href}>
      <slot />
    </SkLink.is>
  );
});