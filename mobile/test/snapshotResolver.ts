module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath + snapshotExtension,
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath.slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: "../src/screens/SignIn/View.spec.tsx", // any test just to test snapshot consistency
};
