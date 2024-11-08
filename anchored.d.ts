declare module "anchored" {
  /**
   * Transforms plain URLs within a given text into clickable link elements.
   * Returns a DocumentFragment containing the transformed text with links.
   *
   * @param text - The input string containing plain URLs to transform.
   * @returns A DocumentFragment with clickable links and plain text.
   */
  export default function anchored(text: string): DocumentFragment;
}
