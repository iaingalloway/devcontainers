# Devcontainers

One of the joys of working with devcontainers is that a new user, on a new machine, can be up-and-running with a fully configured development environment in minutes. However, one of the challenges with working with devcontainers built from Dockerfiles is that they can be cumbersome, time-consuming, and error-prone to build. This is especially true when you are working with multiple devcontainers, or you are working on a project that uses a devcontainer that you don't own. Mechanisms like devcontainer features can help to reduce the complexity of developing devcontainers, but they can become burdensome as they need to be baked into the final image - often at a cost of poor layer caching.

Using a pre-built devcontainer image can help to solve these problems.

This repository contains prebuilt devcontainer images for some of the languages and frameworks I am most frequently building prototypes in. This not only helps me to build proofs-of-concept faster, but also helps me reliably share those proofs-of-concept with other developers.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) (v4.21.1 or higher) or equivalent
- [Visual Studio Code](https://code.visualstudio.com/) (v.1.80 or higher)
- [Dev containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) (v0.299 or higher)

## Usage

1. Clone this repository
2. Open the repository in Visual Studio Code
3. When you see the prompt "Folder contains a Dev Container configuration file", click "Reopen in Container", or select "Dev Containers: Reopen in Container" from the Command Palette (Ctrl+Shift+P)

## Using the devcontainers in a project

### List of images

The following images are available:

- .NET: `ghcr.io/iaingalloway/devcontainers/dotnet:1.2-dotnet8.0.202`
- Go: `ghcr.io/iaingalloway/devcontainers/go:1.2-go1.22.0`
- Hugo: `ghcr.io/iaingalloway/devcontainers/hugo:1.2-hugo0.123.8`
- Javascript (Node): `ghcr.io/iaingalloway/devcontainers/javascript:1.2-node20.11.1`
- Python: `ghcr.io/iaingalloway/devcontainers/python:1.1-python3.12.2`

### Configure a project to use a devcontainer

1. Create a `.devcontainer` folder in the root of your project
2. Create a `devcontainer.json` file in the `.devcontainer` folder with the following content, replacing the image name with the image you want to use:

```json
{
  "name": "My Awesome Project Devcontainer",
  "image": "ghcr.io/iaingalloway/devcontainers/dotnet::1.2-dotnet8.0.202",
  "runArgs": [
    "--name",
    "my-awesome-project-devcontainer",
    "--network=host"
  ]
}
```

When you open the project in Visual Studio Code, you will be prompted to reopen the project in a devcontainer.

### Features

The devcontainers in this repo have the following features:

- [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/) using the [Docker outside of Docker](https://github.com/devcontainers/features/tree/main/src/docker-outside-of-docker) pattern, allowing the devcontainer to interact with the host's docker daemon
- [Kubectl](https://kubernetes.io/docs/reference/kubectl/kubectl/)
- [Helm](https://helm.sh/)
- [Starship](https://starship.rs/) prompt
- [Kind](https://kind.sigs.k8s.io/) to create Kubernetes clusters on the host's docker daemon for local development
- [Chezmoi](https://www.chezmoi.io/) to import and manage dotfiles

Additionally, the devcontainers mount `~/.kube/`, `~/.ssh/`, and `~/.gitconfig`. If '~/.gitconfig' contains a key for the user's github username, this is used to configure Chezmoi.

## Build

To build the images locally, run the following commands:

```bash
devcontainer build --workspace-folder ./src/base --image-name ghcr.io/iaingalloway/devcontainers/base:local
devcontainer build --workspace-folder ./src/dotnet --image-name ghcr.io/iaingalloway/devcontainers/dotnet:local
devcontainer build --workspace-folder ./src/go --image-name ghcr.io/iaingalloway/devcontainers/go:local
devcontainer build --workspace-folder ./src/hugo --image-name ghcr.io/iaingalloway/devcontainers/hugo:local
devcontainer build --workspace-folder ./src/javascript --image-name ghcr.io/iaingalloway/devcontainers/javascript:local
devcontainer build --workspace-folder ./src/python --image-name ghcr.io/iaingalloway/devcontainers/python:local
```

## Further reading

- [Developing inside a Container](https://code.visualstudio.com/docs/remote/containers)
- [Devcontainer CLI](https://code.visualstudio.com/docs/devcontainers/devcontainer-cli)
- [Devcontainer reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)
- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)
- [Docker CLI reference](https://docs.docker.com/engine/reference/commandline/cli/)
- [Dockerfile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
