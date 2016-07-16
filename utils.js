function range (a, b)
{
  const list = []

  if (!b)
    for (let i = 0; i < a; i++)
      list.push(i)
  else
    for (let i = a; i < b; i++)
      list.push(i)

  return list
}

function factorial (n)
{
  return (n / 2) * (n + 1)
}

console.log(factorial(10))
