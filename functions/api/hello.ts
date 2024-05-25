export function onRequest({ env }: { env: { VAR_TEXT: string } }) {
  return new Response(`Hello from ${env.VAR_TEXT}`);
}