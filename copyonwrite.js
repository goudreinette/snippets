function toLinkedList ([head, ...tail])
{
  if (!tail.length)
    return null
  else
    return {head, tail: toLinkedList(tail)}
}

console.log(toLinkedList([0, 1]))
