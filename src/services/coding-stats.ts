
/**
 * Service to fetch coding statistics from LeetCode and HackerRank
 */

interface LeetCodeResponse {
  matchedUser: {
    username: string;
    submitStats: {
      acSubmissionNum: {
        difficulty: string;
        count: number;
      }[];
      totalSubmissionNum: {
        difficulty: string;
        count: number;
      }[];
    };
  };
  allQuestionsCount: {
    difficulty: string;
    count: number;
  }[];
}

interface HackerRankResponse {
  model: {
    name: string;
    skills: {
      name: string;
      level: number;
    }[];
    contests: {
      name: string;
      rank: number;
      total_participants: number;
    }[];
  };
}

// Function to fetch LeetCode statistics for a user
export const fetchLeetCodeStats = async (username: string) => {
  try {
    console.log(`Fetching LeetCode stats for ${username}...`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // If this is greeshmanth's LeetCode profile, return custom stats
    if (username.toLowerCase() === 'greechusmart') {
      return [
        { difficulty: 'Easy', solved: 148, total: 675, color: '#00b8a3' },
        { difficulty: 'Medium', solved: 96, total: 1445, color: '#ffc01e' },
        { difficulty: 'Hard', solved: 42, total: 595, color: '#ff375f' }
      ];
    }
    
    // For other usernames, generate random but realistic stats
    const mockDifficulties = ['Easy', 'Medium', 'Hard'];
    const mockColors = ['#00b8a3', '#ffc01e', '#ff375f'];
    
    const leetCodeData = mockDifficulties.map((difficulty, index) => {
      const totalProblems = difficulty === 'Easy' ? 
        Math.floor(Math.random() * 50) + 400 : 
        difficulty === 'Medium' ? 
          Math.floor(Math.random() * 100) + 800 : 
          Math.floor(Math.random() * 30) + 300;
      
      const solvedProblems = Math.floor(totalProblems * (Math.random() * 0.4 + 0.3));
      
      return {
        difficulty,
        solved: solvedProblems,
        total: totalProblems,
        color: mockColors[index]
      };
    });
    
    return leetCodeData;
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    throw new Error('Failed to fetch LeetCode statistics');
  }
};

// Function to fetch HackerRank statistics for a user
export const fetchHackerRankStats = async (username: string) => {
  try {
    console.log(`Fetching HackerRank stats for ${username}...`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // If this is greeshmanth's HackerRank profile, return custom stats
    if (username.toLowerCase() === 'greeshmanth27') {
      const hackerRankData = [
        { category: 'Algorithms', stars: 5, color: '#38b2ac' },
        { category: 'Data Structures', stars: 5, color: '#38b2ac' },
        { category: 'Mathematics', stars: 4, color: '#38b2ac' },
        { category: 'SQL', stars: 5, color: '#38b2ac' },
        { category: 'Problem Solving', stars: 5, color: '#38b2ac' },
        { category: 'Functional Programming', stars: 3, color: '#38b2ac' }
      ];
      
      const contestData = [
        { name: 'Weekly Contest 342', rank: 486, outOf: 15340 },
        { name: 'Biweekly Contest 89', rank: 524, outOf: 12876 },
        { name: 'Weekly Contest 337', rank: 352, outOf: 16421 },
        { name: 'Google Kickstart 2023', rank: 875, outOf: 24562 }
      ];
      
      return { hackerRankData, contestData };
    }
    
    // For other usernames, generate mock data
    const categories = [
      'Algorithms', 
      'Data Structures', 
      'Mathematics', 
      'SQL', 
      'Functional Programming',
      'Problem Solving'
    ];
    
    const hackerRankData = categories.map(category => ({
      category,
      stars: Math.floor(Math.random() * 2) + 3,
      color: '#38b2ac'
    }));
    
    const contests = [
      'Weekly Contest 342',
      'Biweekly Contest 89',
      'Weekly Contest 337',
      'Google Kickstart 2023',
      'Hash Code 2023'
    ];
    
    const contestData = contests.map(name => ({
      name,
      rank: Math.floor(Math.random() * 2000) + 100,
      outOf: Math.floor(Math.random() * 15000) + 10000
    }));
    
    return { hackerRankData, contestData };
  } catch (error) {
    console.error('Error fetching HackerRank stats:', error);
    throw new Error('Failed to fetch HackerRank statistics');
  }
};

// Function to refresh all stats
export const refreshCodingStats = async (leetCodeUsername: string, hackerRankUsername: string) => {
  try {
    const leetCodeData = await fetchLeetCodeStats(leetCodeUsername);
    const { hackerRankData, contestData } = await fetchHackerRankStats(hackerRankUsername);
    
    return {
      leetCodeData,
      hackerRankData,
      contestData,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error refreshing coding stats:', error);
    throw error;
  }
};
