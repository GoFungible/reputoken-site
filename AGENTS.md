# Project Constraints: React & Web3 Architecture


## 1. Core Design Philosophy
This repo contains a "Reputation Token Marketing Website" with features described below.
The "Reputation Token Marketing Website" (this website) presents to visitors "Reputation Tokens".
A "Reputation Token" is an ERC-20 token that represents a Project.
A "Reputation Token" can be added to a "Project Website" by the "Project Team".
A "Reputation Token" allows users and visitors to invest in the Project.
A "Reputation Token" lifecycle is managed by the "Project Team".
A "Reputation Token" is a multichain token.
A "Reputation Token" does not have an Initial Coin Offering so always will be a fair launch.
A "Reputation Token" can be extended with multiple external extensions by using a proxy pattern.
The "Project Team" can add the "Reputation Token" to the "Project Website" to get funding for his project as the project grows.
The "Project Team" can add the "Reputation Token" to the "Project Website" by inserting a script in the website source code.
The "Project Team" can easily customize look and feel of the visual elements.
The "Project Team" must describe their policy on how they will use the "Reputation Token".
The "Project Team" can manage the Reputation Token presence on different EVM networks.
The "Project Team" can manage the Supply of the "Reputation Token" on the EVM networks.
The "Reputation Token Marketing Website" (this website) will also have its own "Reputation Token" to fund the "Reputation Token" project.

## 2. System Requirements & Architecture
### Technical Constraints
*   **Runtime Dependency:** React `>=18.0.0` (Vite-powered SPA).
*   **Styling Engine:** Tailwind CSS `>=3.0.0`
*   **Icon Asset Library:** Lucide React `>=0.300.0`
*   **Type Engine:** Strict TypeScript compilation with exhaustive property typing.

## 3. Hard Human Confirmation Boundaries (HITL)
You must STOP code generation, freeze all operations, and ask the user for confirmation in chat before:
1. Installing ANY external NPM packages or components outside the core stack.
2. Altering RPC URLs or switching network configurations (e.g., Mainnet vs Testnets).
3. Modifying local smart contract ABI JSON files.
4. Writing state-changing blockchain calls (`.send()`, `writeContract`) without a UI loading state attached.

## 4. Security & Safety Rules
- Do NOT hardcode, read, or generate private keys or seed phrases.
- You are write-blocked from accessing `.env` or `.env.local`. Ask the user in chat if variables are needed.