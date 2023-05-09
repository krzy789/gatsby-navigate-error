import initStoryshots, { multiSnapshotWithOptions, Stories2SnapsConverter } from '@storybook/addon-storyshots';

initStoryshots({
  test: multiSnapshotWithOptions(),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: './__snapshots__/',
    storiesExtensions: ['.js', '.jsx', '.ts', '.tsx']
  })
});
