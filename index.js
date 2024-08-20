function superbowlWin(record) {
    // استخدم find للبحث عن الكائن الذي يحتوي على نتيجة فوز "W"
    const winningRecord = record.find(game => game.result === "W");
    
    // إذا وجدنا كائنًا بفوز، نرجع قيمة السنة، وإلا نرجع undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  