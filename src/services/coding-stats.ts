
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
    // In a real implementation, this would be a fetch to the LeetCode GraphQL API
    // For demo purposes, we're simulating a successful API response
    console.log(`Fetching LeetCode stats for ${username}...`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock data for demonstration
    const mockDifficulties = ['Easy', 'Medium', 'Hard'];
    const mockColors = ['#00b8a3', '#ffc01e', '#ff375f'];
    
    // Generate random but realistic stats
    const leetCodeData = mockDifficulties.map((difficulty, index) => {
      const totalProblems = difficulty === 'Easy' ? 
        Math.floor(Math.random() * 50) + 400 : 
        difficulty === 'Medium' ? 
          Math.floor(Math.random() * 100) + 800 : 
          Math.floor(Math.random() * 30) + 300;
      
      const solvedProblems = Math.floor(totalProblems * (Math.random() * 0.4 + 0.3)); // 30%-70% solved
      
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
    // In a real implementation, this would be a fetch to the HackerRank API
    // For demo purposes, we're simulating a successful API response
    console.log(`Fetching HackerRank stats for ${username}...`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return mock data for demonstration
    const categories = [
      'Algorithms', 
      'Data Structures', 
      'Mathematics', 
      'SQL', 
      'Functional Programming',
      'Problem Solving'
    ];
    
    // Generate mock HackerRank data
    const hackerRankData = categories.map(category => ({
      category,
      stars: Math.floor(Math.random() * 2) + 3, // Random stars between 3-5
      color: '#38b2ac'
    }));
    
    // Generate mock contest data
    const contests = [
      'Weekly Contest 342',
      'Biweekly Contest 89',
      'Weekly Contest 337',
      'Google Kickstart 2023',
      'Hash Code 2023'
    ];
    
    const contestData = contests.map(name => ({
      name,
      rank: Math.floor(Math.random() * 2000) + 100, // Random rank between 100-2100
      outOf: Math.floor(Math.random() * 15000) + 10000 // Random total between 10000-25000
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
