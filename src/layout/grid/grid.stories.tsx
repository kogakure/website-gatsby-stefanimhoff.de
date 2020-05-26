import React from 'react';
import styled from 'styled-components';

import { Grid } from '.';

export default {
  component: Grid,
  title: 'Layout/Grid',
};

const Box = styled.div`
  background: rgba(25, 25, 25, 0.3);
  border: 1px dotted black;
  text-align: center;
`;

export const Default = () => (
  <Grid debug>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
    <Box>7</Box>
    <Box>8</Box>
    <Box>9</Box>
    <Box>10</Box>
    <Box>11</Box>
    <Box>12</Box>
    <Box>13</Box>
    <Box>14</Box>
    <Box>15</Box>
    <Box>16</Box>
    <Box>17</Box>
    <Box>18</Box>
  </Grid>
);

export const Fullsize = () => (
  <Grid debug variant="fullsize">
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
    <Box>7</Box>
    <Box>8</Box>
    <Box>9</Box>
    <Box>10</Box>
    <Box>11</Box>
    <Box>12</Box>
    <Box>13</Box>
    <Box>14</Box>
    <Box>15</Box>
    <Box>16</Box>
    <Box>17</Box>
    <Box>18</Box>
  </Grid>
);

export const Regular = () => (
  <Grid debug variant="regular">
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
    <Box>7</Box>
    <Box>8</Box>
    <Box>9</Box>
    <Box>10</Box>
    <Box>11</Box>
    <Box>12</Box>
    <Box>13</Box>
    <Box>14</Box>
  </Grid>
);

export const Narrow = () => (
  <Grid debug variant="narrow">
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
    <Box>7</Box>
    <Box>8</Box>
  </Grid>
);

export const RowGap = () => (
  <Grid debug rowGap variant="narrow">
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
    <Box>7</Box>
    <Box>8</Box>
    <Box>9</Box>
    <Box>10</Box>
  </Grid>
);
