/* eslint-disable */
/** TODO: Types will be added in version 2.x of @mdx-js/react
 *  https://github.com/mdx-js/mdx/issues/616
 */
declare module '@mdx-js/react' {
  type MDXProps = {
    children: React.ReactNode;
    components: {};
  };
  export class MDXProvider extends React.Component<MDXProps> {}
}
