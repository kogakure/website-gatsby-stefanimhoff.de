import React from 'react';

import { RubyAnnotation } from '.';

export default {
  component: RubyAnnotation,
  title: 'Text Styles/Ruby Annotation',
};

export const Default = () => (
  <p>
    <RubyAnnotation base="日" text="に" />
    <RubyAnnotation base="本" text="ほん" />
    <RubyAnnotation base="語" text="ご" />で
    <RubyAnnotation base="書" text="か" />
    いた
    <RubyAnnotation base="作" text="さく" />
    <RubyAnnotation base="文" text="ぶん" />
    です。
  </p>
);
