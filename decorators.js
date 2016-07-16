export function unary (fn)
{
  return a => fn.call(this, a)
}
