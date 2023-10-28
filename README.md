# Devcontainers

This repository contains prebuilt devcontainer images.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (v4.21.1 or higher) or equivalent
- [Visual Studio Code](https://code.visualstudio.com/) (v.1.80 or higher)
- [Dev containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) (v0.299 or higher)

## Usage

1. Clone this repository
2. Open the repository in Visual Studio Code
3. When you see the prompt "Folder contains a Dev Container configuration file, click "Reopen in Container", or select "Dev Containers: Reopen in Container" from the Command Palette (Ctrl+Shift+P)

## Using the devcontainers in a project

### List of images

The following images are available:

- .NET 8: `ghcr.io/iaingalloway/devcontainers/dotnet:1.0.0-dotnet8.0.100-preview.7.23376.3`
- Go 1.21: `ghcr.io/iaingalloway/devcontainers/go:1.0.0-go1.21.0`
- Hugo: `ghcr.io/iaingalloway/devcontainers/hugo:1.0.0-hugo0.118.2`
- Javascript (Node 20.6.1): `ghcr.io/iaingalloway/devcontainers/javascript:1.0.0-node20.6.1`
- Python 3.11: `ghcr.io/iaingalloway/devcontainers/python:1.0.0-python3.11.5`

### Configure a project to use a devcontainer

1. Create a `.devcontainer` folder in the root of your project
2. Create a `devcontainer.json` file in the `.devcontainer` folder with the following content, replacing the image name with the image you want to use:

```json
{
    "image": "ghcr.io/iaingalloway/devcontainers/dotnet:1.0.0-dotnet8.0.100-preview.7.23376.3",
}
```

When you open the project in Visual Studio Code, you will be prompted to reopen the project in a devcontainer.

## Build

To build the images locally, run the following commands:

```bash
devcontainer build --workspace-folder ./src/devcontainers/base --image-name ghcr.io/iaingalloway/devcontainers/base:local
devcontainer build --workspace-folder ./src/devcontainers/dotnet --image-name ghcr.io/iaingalloway/devcontainers/dotnet:local
devcontainer build --workspace-folder ./src/devcontainers/go --image-name ghcr.io/iaingalloway/devcontainers/go:local
devcontainer build --workspace-folder ./src/devcontainers/hugo --image-name ghcr.io/iaingalloway/devcontainers/hugo:local
devcontainer build --workspace-folder ./src/devcontainers/javascript --image-name ghcr.io/iaingalloway/devcontainers/javascript:local
devcontainer build --workspace-folder ./src/devcontainers/python --image-name ghcr.io/iaingalloway/devcontainers/python:local
```

## Actions

This repository also contains various utility actions. Refer to the action README files under .github/actions for details.
