function iconTemplate({ template }, opts, { componentName, jsx, exports }) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import React, { SVGProps } from 'react';
    const ${componentName} = (props: SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `;
}

module.exports = iconTemplate;
