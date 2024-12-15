function getSlicedElementsAndRestCount(array: number[], threshold: number) {
  const slicedElements = array.slice(0, threshold);
  let restCount = array.length - slicedElements.length;
  if (restCount < 0) restCount = 0;
  return { slicedElements, restCount };
}

export default getSlicedElementsAndRestCount;
