# Recettes enrichies par IA – TP 2

Starter du **TP 2 – Recettes** du cours DEVAPI.

Au fil des TP, vous construirez une plateforme de recettes en microservices : une gateway REST, des services en gRPC, puis un enrichissement des recettes par un LLM en arrière-plan. Ce starter contient la correction du TP 1 (l'authentification) ; ce TP ajoute un deuxième service, les recettes.

```sh
pnpm install
pnpm secret   # secret de signature des JWT, écrit dans .env (inutile si .env existe déjà)
pnpm infra    # les bases du user service et du recipe service, dans Docker
pnpm dev      # les apps en mode watch, le front sur http://localhost:5173
```

## Ce qui est fourni

| Où                                     | Quoi                                                                         |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| `apps/front`                           | le front React, complet : il ne parle qu'à la gateway                        |
| `apps/gateway`                         | la gateway du TP 1 : `/auth/register`, `/auth/login`, `/me`, le guard JWT    |
| `apps/user`                            | le user service du TP 1, en gRPC                                             |
| `apps/recipe`                          | une app Nest connectée à sa base, avec le schéma `Recipe`, sans aucune route |
| `packages/contracts`                   | le contrat gRPC du user service (`proto/user.proto`) et ses types TypeScript |
| `packages/config`                      | la lecture des variables d'environnement                                     |
| `packages/eslint`, `packages/tsconfig` | les configurations partagées : ESLint, TypeScript strict                     |

Les bases sont pré-remplies au premier lancement :

- `user-db` : `alice@example.com`, `bob@example.com` et `chloe@example.com`, mot de passe `password123`
- `recipe-db` : cinq recettes de ces trois comptes

## Documentation

- [Démarrage](docs/getting-started.md) : commandes, ports, vérifications
- [Conventions](docs/conventions.md) : monorepo, TypeScript, lint, commits
