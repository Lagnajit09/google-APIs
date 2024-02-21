# API Usage Examples

This repository contains examples of using various APIs such as Google Generative AI, Google Custom Search, and YouTube Data API. Below are the steps to use each of these codes along with the required installations and instructions on obtaining API keys and enabling API services.

## Gemini API (Google Generative AI)

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone this repository.
2. Install dependencies using npm:
   ```bash
   npm install
   ```

### Usage

1. Obtain an API key for Google Generative AI by following these steps:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Navigate to the API & Services > Credentials page.
   - Click "Create credentials" and select "API key".
   - Copy the generated API key.
2. Set up your Google Generative AI API key by creating a `.env` file in the root directory of the project and adding the following line:
   ```
   API_KEY=your_api_key_here
   ```
3. Run the `gemini.js` script:
   ```bash
   node gemini.js
   ```
4. Follow the prompts and interact with the script to generate content using the Gemini API.

## Google Custom Search API

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone this repository.
2. Install dependencies using npm:
   ```bash
   npm install
   ```

### Usage

1. Obtain API keys for Google Custom Search API by following these steps:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Navigate to the API & Services > Credentials page.
   - Click "Create credentials" and select "API key".
   - Copy the generated API key.
   - Navigate to the [Custom Search JSON API](https://console.developers.google.com/apis/library/customsearch.googleapis.com) page.
   - Enable the API for your project.
2. Obtain your Custom Search Engine ID by creating a Custom Search Engine following the instructions [here](https://developers.google.com/custom-search/docs/tutorial/creatingcse).
3. Set up your Google Custom Search API key and Custom Search Engine ID by creating a `.env` file in the root directory of the project and adding the following lines:
   ```
   CSE_ID=your_custom_search_engine_id_here
   GOOGLE_CONSOLE_API_KEY=your_api_key_here
   ```
4. Run the `googleSearch.js` script:
   ```bash
   node googleSearch.js
   ```
5. Follow the prompts and interact with the script to perform a Google search and fetch the results.

## YouTube Data API

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone this repository.
2. Install dependencies using npm:
   ```bash
   npm install
   ```

### Usage

1. Obtain an API key for YouTube Data API by following these steps:
   - Go to the [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project or select an existing one.
   - Navigate to the API & Services > Credentials page.
   - Click "Create credentials" and select "API key".
   - Copy the generated API key.
   - Navigate to the [YouTube Data API](https://console.developers.google.com/apis/library/youtube.googleapis.com) page.
   - Enable the API for your project.
2. Set up your YouTube Data API key by creating a `.env` file in the root directory of the project and adding the following line:
   ```
   GOOGLE_CONSOLE_API_KEY=your_api_key_here
   ```
3. Run the `youtubeSearch.js` script:
   ```bash
   node youtubeSearch.js
   ```
4. Follow the prompts and interact with the script to search for videos on YouTube.
