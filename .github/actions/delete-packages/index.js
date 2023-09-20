import { getInput, setFailed } from '@actions/core';

try {
  // Get inputs
  const token = getInput('token');
  const packageNames = getInput('package-names');
  const includeTags = getInput('include-tags');
  const excludeTags = getInput('exclude-tags');
  const retentionThreshold = getInput('retention-threshold');
  const keepAtLeast = getInput('keep-at-least');
  const dryRun = getInput('dry-run');

  // Log the inputs for testing
  console.log('Token:', token ? 'Provided' : 'Not Provided'); // For security reasons, don't log the actual token
  console.log('Package names:', packageNames);
  console.log('Include tags:', includeTags);
  console.log('Exclude tags:', excludeTags);
  console.log('Retention threshold:', retentionThreshold);
  console.log('Keep at least:', keepAtLeast);
  console.log('Dry run:', dryRun);

  // Log a confirmation message
  console.log('GitHub Action setup looks good!');

} catch (error) {
  setFailed(`Action failed with error: ${error}`);
}
