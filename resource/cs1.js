function showMaterials(subject) {
    var materialsContent = document.getElementById('materials-content');
    
    // Clear any existing content before adding new material links
    materialsContent.innerHTML = '';

    // Define materials for each subject
    var materials = {
        'CPS': [
            {name: 'Lecture Notes', link: 'https://drive.google.com/drive/folders/1-pYhsTwdGl3OBWcy5SZ9CDTpEwdAzMkw?usp=sharing'},
            {name: 'Question Papers', link: 'https://drive.google.com/file/d/...'},
            {name: 'Useful Links', link: 'https://drive.google.com/file/d/...'}
        ],
        'Calculus': [
            {name: 'Lecture Notes', link: 'https://drive.google.com/file/d/...'},
            {name: 'Question Papers', link: 'https://drive.google.com/file/d/...'},
            {name: 'Useful Links', link: 'https://drive.google.com/file/d/...'}
        ],
        'TC': [
            {name: 'Lecture Notes', link: 'https://drive.google.com/file/d/...'},
            {name: 'Question Papers', link: 'https://drive.google.com/file/d/...'},
            {name: 'Useful Links', link: 'https://drive.google.com/file/d/...'}
        ],
        'EEE': [
            {name: 'Lecture Notes', link: 'https://drive.google.com/file/d/...'},
            {name: 'Question Papers', link: 'https://drive.google.com/file/d/...'},
            {name: 'Useful Links', link: 'https://drive.google.com/file/d/...'}
        ],
        'OOP': [
            {name: 'Lecture Notes', link: 'https://drive.google.com/file/d/...'},
            {name: 'Question Papers', link: 'https://drive.google.com/file/d/...'},
            {name: 'Useful Links', link: 'https://drive.google.com/file/d/...'}
        ],
        'UID': [
            {name: 'Lecture Notes', link: 'https://drive.google.com/file/d/...'},
            {name: 'Question Papers', link: 'https://drive.google.com/file/d/...'},
            {name: 'Useful Links', link: 'https://drive.google.com/file/d/...'}
        ],
        'LA': [
            {name: 'Lecture Notes', link: 'https://drive.google.com/file/d/...'},
            {name: 'Question Papers', link: 'https://drive.google.com/file/d/...'},
            {name: 'Useful Links', link: 'https://drive.google.com/file/d/...'}
        ],
        'DM': [
            {name: 'Lecture Notes', link: 'https://drive.google.com/file/d/...'},
            {name: 'Question Papers', link: 'https://drive.google.com/file/d/...'},
            {name: 'Useful Links', link: 'https://drive.google.com/file/d/...'}
        ],

        'CM': [
            {name: 'Curriculum PDF', link: 'https://intranet.cb.amrita.edu/sites/default/files/2023-2024/Sylabus/BTech-CSE-CURRICULUM%26SYLLABUS-2023.pdf'}
        ],
           
    };

    var subjectMaterials = materials[subject];

    // If materials are found for the selected subject
    if (subjectMaterials) {
        subjectMaterials.forEach(function(material) {
            var materialLink = document.createElement('a');
            materialLink.href = material.link;
            materialLink.target = '_blank';
            materialLink.textContent = material.name;
            materialLink.classList.add('material-link');  // Apply CSS class for styling

            var materialListItem = document.createElement('li');
            materialListItem.appendChild(materialLink);

            materialsContent.appendChild(materialListItem);
        });

        // Display the materials content
        materialsContent.style.display = "block";
    } else {
        // Show a message if no materials are available for the subject
        var noMaterialsMessage = document.createElement('p');
        noMaterialsMessage.textContent = 'No materials available for this subject.';
        materialsContent.appendChild(noMaterialsMessage);
        materialsContent.style.display = "block";
    }
}
