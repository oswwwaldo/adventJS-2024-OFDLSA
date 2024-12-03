// Challenge #1: First gift repeated!
    // example input: [3, 1, 2, 3, 4, 2, 5]
    // example output: [1, 2, 3, 4, 5]

function prepareGifts(gifts) {
    // Remove duplicates by converting the array to a Set and back to an array
    const uniqueGifts = [...new Set(gifts)];
  
    // Sort the array in ascending order
    uniqueGifts.sort((a, b) => a - b);
  
    return uniqueGifts;
}

// Challenge #2: Framing Names 
    // example input: createFrame(['midu', 'madeval', 'educalvolpz'])
    // example output:
        //. ***************
        //. * midu        *
        //. * madeval     *
        //. * educalvolpz *
        //. ***************

function createFrame(names) {
    // Determines the length of the longest name 
    const largestNameLength = Math.max(...names.map(name => name.length || 0));

    // Constructs the horizontal border with padding
    const horizontalBorder = '*'.repeat(largestNameLength + 4);

    // Initialize the frame's top border
    let frame = horizontalBorder;

    // Add each name with padding
    for (const name of names) {
        const padding = ' '.repeat(largestNameLength - name.length);
        frame += `\n* ${name}${padding} *`;
    }

    // Closes the frame with a bottom border
    frame += `\n${horizontalBorder}`;

    return frame;
}