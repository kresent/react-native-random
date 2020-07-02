import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';

const setup = (editing = false) => {
  const renderer = createRenderer();

  let output = renderer.getRenderOutput();

  if (editing) {
    const label = output.props.children.props.children[1];
    label.props.onDoubleClick({});
    output = renderer.getRenderOutput();
  }

  return {
    props: props,
    output: output,
    renderer: renderer,
  };
};

describe('LogList', () => {
  it('List with zero values shows empty list', () => {
    // TODO: create jest test
  });

  it('List with many values causes scrolling', () => {
    // TODO: create jest test
  });

  it('Close modal', () => {
    // TODO: create jest test
  });
});
